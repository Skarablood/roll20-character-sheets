// === SHARED FUNCTIONS
const setAttributes = (update, silent) => { 
	silent === true ? setAttrs(update, {silent:true}) : setAttrs(update); 
};

const replaceSpaces = name => key.replace(/ /g, '_')

globalAttributesByCatagory.characteristics.forEach(characteristic => {
	on(`change:${characteristic} change:${characteristic}_modifier_bonus`, () => {
		getAttrs([`${characteristic}`, `${characteristic}_modifier_bonus`], values => {
			values = {score: values[`${characteristic}`], bonus: values[`${characteristic}_modifier_bonus`]}
			setAttributes({[`${characteristic}_modifier`]: functions.calculateAttributes(values)});
		})
	});
})

globalAttributesByCatagory.xp.forEach(xp => {
	on(`change:${xp}`, () => {
		getAttrs(globalAttributesByCatagory.xp, values => {
			values = {earned: values[`total_xp_earned`], spent: values[`total_xp_spent`]}
			setAttributes({[`unspent_xp`]: functions.calculateXP(values)});
		})
	});
})

on(`change:repeating_advancement:cost`, eventinfo => {
	const repeatingRow = functions.getReprowid(eventinfo.triggerName)

    getSectionIDs("advancement", idarray => {
        let advancementArray = [];
        idarray.forEach(id => advancementArray.push(`repeating_advancement_${id}_cost`));
        getAttrs(advancementArray, values => {
        	setAttributes({[`total_xp_spent`]: functions.calculateXPCost(values)});
        });
    });
});

