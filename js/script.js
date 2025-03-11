const guessInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#submiButton')
const result = document.querySelector('.result')
const attemptsText = document.querySelector('.attempts')

let attempts = 0

const randomNumber = Math.floor(Math.random() * 100) + 1

//console.log(randomNumber)

submitBtn.addEventListener('click', checkGuess)

guessInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        checkGuess()
    }
})

function checkGuess() {
    const userGuess = parseInt(guessInput.value)
    if (isNaN(userGuess)) {
        result.textContent = `😡 숫자를 입력하라고 바보야`
        result.style.color = 'red'
        return
    }
attempts++;
attemptsText.textContent=attempts



if(userGuess===randomNumber){
    result.textContent=`👼축하합니다! ${attempts}번의 시도끝에 맞췄습니다!`
    result.style.color='green'
}else if(userGuess<randomNumber){
result.textContent=`😈틀렸어! 더 큰 숫자를 입력하라고 바보야! `
result.style.color='red'
}else{
result.textContent=`😈틀렸어! 더 작은 숫자를 입력하라고 바보야! `
result.style.color='red'
}
 guessInput.value=''
guessInput.focus()
}