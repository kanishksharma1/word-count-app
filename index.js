document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("input").value
let newText = text.replace(/ /g, "");
document.querySelector("#output").innerHTML = "Your Word Count is : " + newText.length
})