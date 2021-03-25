if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

function doKeyPress(e) {
    alert('Key pressed: ' + e.key + ' Key Code: ' +  e.keyCode); //shows pressed key
}