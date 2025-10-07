const params = new URLSearchParams(window.location.search);
const checkpont = params.get("c") || 1
const redirect = params.get("r")
const cp_ele = document.getElementById("cp")
cp_ele.innerHTML = "CheckPoint " + checkpont
const urls = ["https://discord.gg/Y9d4svT7wD", "https://www.facebook.com/noguchi.hyuga", "https://github.com/noguchihyuga"]
function redirecturl() {
    window.location.href = "https://link4m.com/" + redirect
}

function tourl(url) {
    window.location.href = urls[url - 1]
}