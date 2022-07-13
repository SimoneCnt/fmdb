
function findAndHighlight() {
    var stext = document.getElementById("search").value.toLowerCase();
    var elements = document.getElementsByClassName('minsearch');
    for (var i=0; i<elements.length; i++) {
        var mins = elements[i]
        if (stext.length>0 && mins.innerHTML.toLowerCase().indexOf(stext)>-1) {
            mins.classList.add("highlighted");
        } else {
            mins.classList.remove("highlighted");
        }
    }
}

