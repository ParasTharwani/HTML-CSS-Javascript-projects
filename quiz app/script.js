
const questions = [
    {
        'que' : 'which of the following is a markup language ?' ,
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'PHP', 
        'correct' : 'a'
       },
       {
        'que' : 'what year was javascript launched ?' ,
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above', 
        'correct' : 'b'
       },
       {
        'que' : 'what does CSS stand for ?' ,
        'a' : 'Hyperactivr markup language',
        'b' : 'Cascading style sheet',
        'c' : 'Javascript',
        'd' : 'PHP', 
        'correct' : 'b'
       }
]

let total = questions.length;
let index = 0;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
    reset();
    if (index === total) {
        endQuiz();
    }
    const data = questions[index];
    console.log(data);
    console.log(data.que);
    queBox.innerText = `${index + 1})  ${data.que} ` ;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const ans = getAnswer();
    const data = questions[index];
    if (ans === data.correct) {
    right++;
    } else {
        wrong++;
    }
     index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
            answer = input.value;
            } 
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
 document.getElementById('box').innerHTML = `
 <div style="text-align:center" >
 <h3>Thankyou for Participating in the quiz</h3>
 <h2> ${right}/${total} are correct </h2>
 </div> 
 `
}

// initial call
loadQuestion();