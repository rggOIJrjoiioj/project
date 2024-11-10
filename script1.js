const form=document.querySelector(".form")
const button=document.querySelector(".knopka")
const text=document.querySelector(".dysha")
button.addEventListener("click", function(event) {
    event.preventDefault()
    text.style.display="block"
})