const solution =document.querySelector(".solution")
const buttonSolution =document.querySelector(".task_button")

const solution1 =document.querySelector(".solution1")
const buttonSolution1 =document.querySelector(".task_button1")

const solution2 =document.querySelector(".solution2")
const buttonSolution2 =document.querySelector(".task_button2")

const solution3 =document.querySelector(".solution3")
const buttonSolution3 =document.querySelector(".task_button3")

const solution4 =document.querySelector(".solution4")
const buttonSolution4 =document.querySelector(".task_button4")

let isClicked = false;
let isClicked1 = false;
let isClicked2 = false;
let isClicked3 = false;
let isClicked4 = false;


buttonSolution.addEventListener("click", function(event) {
    event.preventDefault()
    if (!isClicked) {
        solution.style.display="block"
        isClicked=!isClicked
        buttonSolution.textContent="Скрыть решение >"
    } else {
        solution.style.display="none"
        isClicked=!isClicked
        buttonSolution.textContent="Узнать решение >"
    }
    
})

buttonSolution1.addEventListener("click", function(event) {
    event.preventDefault()
    if (!isClicked1) {
        solution1.style.display="block"
        isClicked1=!isClicked1
        buttonSolution1.textContent="Скрыть решение >"

    } else {
        solution1.style.display="none"
        isClicked1=!isClicked1
        buttonSolution1.textContent="Узнать решение >"

    }
    
})

buttonSolution2.addEventListener("click", function(event) {
    event.preventDefault()
    if (!isClicked2) {
        solution2.style.display="block"
        isClicked2=!isClicked2
        buttonSolution2.textContent="Скрыть решение >"

    } else {
        solution2.style.display="none"
        isClicked2=!isClicked2
        buttonSolution2.textContent="Узнать решение >"

    }
    
})

buttonSolution3.addEventListener("click", function(event) {
    event.preventDefault()
    if (!isClicked3) {
        solution3.style.display="block"
        isClicked3=!isClicked3
        buttonSolution3.textContent="Скрыть решение >"

    } else {
        solution3.style.display="none"
        isClicked3=!isClicked3
        buttonSolution3.textContent="Узнать решение >"

    }
    
})

buttonSolution4.addEventListener("click", function(event) {
    event.preventDefault()
    if (!isClicked4) {
        solution4.style.display="block"
        isClicked4=!isClicked4
        buttonSolution4.textContent="Скрыть решение >"

    } else {
        solution4.style.display="none"
        isClicked4=!isClicked4
        buttonSolution4.textContent="Узнать решение >"

    }
    
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



//let str=''
//alert(str); 