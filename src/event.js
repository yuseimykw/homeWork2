let title = document.getElementsByTagName("h1")[0]
let content = document.getElementsByTagName("li")[0]
let btn = document.getElementById("changeBtn")

const changeContent = () => {
    btn.addEventListener("click", function (e) {
        e.preventDefault()
        title.textContent = "しちゅーのざいりょう"
        content.textContent = "しちゅうーのるー"
    })
}

export { changeContent }