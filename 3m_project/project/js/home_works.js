///////////////check email
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const result = document.querySelector("#gmail_result")

const regExp = /@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        result.innerHTML = 'ok'
        result.style.color = 'green'
    } else {
        result.innerHTML = 'not ok'
        result.style.color = 'red'
    }
}

///////////////////////move block
const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")
parentBlockWidth = parseInt(parentBlock.style.width = "800px")
childBlockWidth = parseInt(childBlock.style.width = "70px")

let count = 0;

const counter = () => {
    count++

    childBlock.style.left = `${count}px`;

    if (count < parentBlockWidth - childBlockWidth){
        requestAnimationFrame(counter)
    }
};
counter(count)
