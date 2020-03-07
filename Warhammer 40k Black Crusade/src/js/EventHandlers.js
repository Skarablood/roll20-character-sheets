// === SHARED FUNCTIONS
const setAttributes = (update, silent) => { 
	silent === true ? setAttrs(update, {silent:true}) : setAttrs(update); 
};

const replaceSpaces = name => key.replace(/ /g, '_')

globalAttributesByCatagory.characteristics.forEach(characteristic => {
	on(`change:${characteristic} change:${characteristic}_modifier_bonus`, () => {
		getAttrs([`${characteristic}`, `${characteristic}_modifier_bonus`], values => {
			values = {score: values[`${characteristic}`], bonus: values[`${characteristic}_modifier_bonus`]}
			setAttributes({[`${characteristic}_modifier`]: Characteristics.calculateAttributes(values)});
		})
	});
})

