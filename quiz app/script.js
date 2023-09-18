const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container=document.getElementById('quiz')
const question=document.getElementById('question')
const answer=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const btn=document.getElementById('submit')

let quiz=0;
let score=0;

let loadQuiz=()=>{
    deselect()
   let currentQuiz=quizData[quiz]
    question.innerHTML=currentQuiz.question
    a_text.innerHTML=currentQuiz.a
    b_text.innerHTML=currentQuiz.b
    c_text.innerHTML=currentQuiz.c
    d_text.innerHTML=currentQuiz.d
}
loadQuiz();



function deselect(){
    answer.forEach((answer)=>answer.checked=false)
}



function checkAnswer(){
    let answerCheck;

    answer.forEach((answerE)=>{
        if(answerE.checked){
            answerCheck=answerE.id
        }
    })
    return answerCheck
}



btn.addEventListener('click',()=>{
    let ans=checkAnswer();

    if(ans){
        if(ans===quizData[quiz].correct){
            score++;
        }
    }

    quiz++;

    if(quiz < quizData.length){
        loadQuiz();
    }else{
        if(score>=3){
        container.innerHTML= `
        <img src='https://w7.pngwing.com/pngs/296/544/png-transparent-multicolored-congratulations-dunottar-school-youtube-competition-s-congratulations-icon-miscellaneous-text-logo.png' height=430px width=606px >

        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Re Submit</button>
    `}else{
        container.innerHTML= `
        <img src='https://media.istockphoto.com/id/1292394543/vector/cartoonish-puppy-and-a-lettering-phrase-oops-the-funny-dog-made-a-prank-with-a-box.jpg?s=612x612&w=0&k=20&c=YRCvEdccI4mIbZvfPIaFXNB19M7veSbkT16eCuMXalQ=' height=430px width=606px >

        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Re Submit</button>
    ` 
    }
    }
})

