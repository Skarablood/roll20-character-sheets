// CHARACTERMANCER IMPORTER
on("clicked:import_launch", (eventinfo) => {
	startCharactermancer("importer");
});

on("page:importer", () => {
	setAttrs({ builder: "Hero Lab"});
	setCharmancerText({
		"directions": herolabDirections
	})
})

on("clicked:import", () => {
	const mancerData = getCharmancerData();
	const mancerValues = mancerData["importer"].values;
	let applyEnabled = true;
	let setText = {};

	if (mancerValues.builder === "Hero Lab") {
		importerHeroLabProcess(mancerValues)
	} else if (mancerValues.builder === "Chummer") {
		importerChummerProcessor(mancerValues)
	} else {
		console.warn("Builder type not selected")
	}
})

const chummerDirections = `
	<ol>
		<li>In Chummer mark your character as created</li>
		<li>Go to File -> Export -> Export JSON</li>
		<li>Copy the JSON in the file</li>
		<li>Paste it into the textfield below</li>
		<li>Click the Import button</li>
		<li>Review the data. Use the checkbox <strong>Show Hidden Inputs</strong> to fix data.</li> 
		<li>Click Apply to <u>overwrite</u> information on the character sheet</li>
	</ol>`;

on("change:builder", (eventinfo) => {
	let setText = {};
	setText[`directions`] = (eventinfo.newValue === "Chummer") ? chummerDirections : herolabDirections;
	setCharmancerText(setText);
});

const clean = () => {
	['active', 'knowledge', 'language', 'quality', 'martial',
		'range', 'melee', 'weapon', 'armor', 'augementations',
		'items', 'NPCspell', 'spell', 'rituals', 'preps', 'powers',
		'contacts', 'vehicle', 'lifestyle', "programs", "forms"].forEach(group => {
		getSectionIDs(`repeating_${group}`, (ids) => {
			ids.forEach((id) => {
				removeRepeatingRow(`repeating_${group}_${id}`);
			});
		});
	});
};

//USEFUL FUNCTIONS
const capitialize = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const addFeedback = (attribute, value) => {
	return `<p class="feedback"><strong>${capitialize(attribute)}:</strong> ${value} </p>`
};

const alphabatizeKeys = (unsortedJSON) => {
	let alphabeticalKeys = {};
	Object.keys(unsortedJSON).sort().forEach((key) => {
			alphabeticalKeys[key] = unsortedJSON[key];
	});
	return alphabeticalKeys
};

const getValInParen = (value) => {
	return value.split("(")[1].split(")")[0];
};

const getArray = (array) => {
	return Array.isArray(array) ? array : [ array ];
};

const getSplitNum = (value) => {
	return value.split("/")[0];
}


	//:+:+:+:+: OLD/ORIGINAL CHUMMER CODE :+:+:+:+:
const chummerImporter = mancerValues => {
	let applyEnabled = true;
	let setText = {};

	// Verify the user entered a JSON in the textarea. If not, provide user feedabck.
	if (mancerValues.importedData) {
		const parsedData = JSON.parse(mancerValues.importedData) || false;
		setText[`import-feedback`] = "";
		// There is a value in the textarea! Check to see if its a valid JSON. Provide users feeadback 
		if (parsedData) {
			setText[`import-feedback`] += `<p class="feedback">A valid JSON was imported for ${mancerValues.builder}.</p>`
			// Send the parsed data to the selected importer or let users know something went wrong 
			if (mancerValues.builder && mancerValues.builder === "Chummer") {
				if (parsedData.characters && parsedData.characters.character) {
					importChummer(parsedData.characters.character);
				} else {
					setText[`import-feedback`] += `<p class="warning">Parsed JSON is missing character data.</p>`;
					applyEnabled = false
				}
			} else if (mancerValues.builder && mancerValues.builder === "Hero Lab") {
				importHeroLab();
				setText[`import-feedback`] += `<p class="warning">Coming Soon....</p>`;
			} else {
				setText[`import-feedback`] += `<p class="warning">A character builder was not selected. Try changing your selection then change it back if needed.</p>`;
				applyEnabled = false
			}
		} else {
			setText[`import-feedback`] += `<p class="warning"><span>The text imported is not a valid JSON. Verify the JSON is formatted correctly. Check the format at,</span> JSONLint.com.</p>`;
			applyEnabled = false
		};
	} else {
		setText[`import-feedback`] = `<p class="warning">No information was entered in the JSON text area.</p>`;
		applyEnabled = false
	};

	let buttonStatus = (applyEnabled) ? "" : "disabled";
	setText[`finish-button`] = `<button class="finish" type="finish" value="apply" data-i18n="apply" ${buttonStatus}>Apply</button>`;

	setCharmancerText(setText);
}