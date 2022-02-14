
 addstuff = function () {
     document.getElementById("button").onclick = function() {
        let text = document.getElementById("input").value;
        let li = "<li>" + text + "</li>"
        document.getElementById("listitems").insertAdjacentHTML('beforeend', li);
        document.getElementById("input").value = "";
}
}