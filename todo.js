
window.onload = function () {
    document.getElementById("button").onclick = function () {
        let text = document.getElementById("inp").value;
        let li = "<li>" + text + "</li>"
        if (text === "") {
            alert("please add a to do item")
        } else {
            document.getElementById("listitems").insertAdjacentHTML('beforeend', li);
            document.getElementById("inp").value = "";
            console.log(addLi())
        }

    }
}   
//     document.getElementById("inp").addEventListener("keyup", function (event) {
//         if (event.code === "KeyEnter") {
//             event.preventDefault("keyEnter");
//             document.getElementById("button").onclick();
//         }
//     });
// }