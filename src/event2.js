let colorBtn = document.getElementById("changeColor")
let body = document.getElementsByTagName("body")[0]
let h1 = document.getElementsByTagName("h1")[0]

const changeStyle = () => {
    colorBtn.addEventListener("click", function (e) {
        e.preventDefault()
        body.style.backgroundColor = "snow"
        h1.style.backgroundColor = "snow"
    })
}

export { changeStyle }