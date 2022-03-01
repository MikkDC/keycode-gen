// create function which detects key press
// this is what addEventListener does
// It effectively 'listens' for user input
// of the type specified - in this case
// keydown, which waits for a key press.

document.addEventListener("keydown", (evt) => {
	let keyVal = document.getElementById("key");        // These take the elements in the html and
	let whichVal = document.getElementById("which");    // store them as variables, used below
	let codeVal = document.getElementById("code");

	keyVal.textContent = evt.key;       // This basically injects text with textContent
	whichVal.textContent = evt.which;   // in the html, using the element ids created
	codeVal.textContent = evt.code;

});

