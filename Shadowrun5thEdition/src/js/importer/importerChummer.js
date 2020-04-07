//:+:+:+:+: OLD/ORIGINAL CHUMMER CODE :+:+:+:+:
const importerChummerProcessor = mancerValues => {
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
