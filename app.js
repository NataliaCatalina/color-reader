const colorInput = document.querySelector('#colorInput')
const btnDisplay = document.querySelector('#btnDisplay')
const colorExa = document.querySelector('#colorExa')
const cardColor = document.querySelector('#cardColor')

btnDisplay.addEventListener('click', () => {
    colorExa.textContent = colorInput.value
    cardColor.style.backgroundColor = colorInput.value
    navigator.clipboard
        .writeText(colorInput.value)
        .then(() => console.log('copied text'))
        .catch((e) => console.log(e))
})