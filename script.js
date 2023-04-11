var questionsDB = [
    {
        question: "what does HTML stand for? ",
        answer: "Hyper text markup language. ",


    },
    {
        question: "what does CSS stand for?",
        answer: "cascading style sheet"
    },
    {
        question:"Load Test Switch: Load test switch to simulate normal power failure. (Maintained type).",
        answer:"Accessory 5L"
        
    }
    ,
    {
        question:"Transfer Override Switch: Overrides automatic retransfer control so automatic transfer switch will remain connected to emergency power source regardless of condition of normal source. Pilot light indicates override status.",
        answer:"Accessory 6DL"
    },
    {
        question:"Signal-Before-Transfer Contacts: A set of normally open/normally closed dry contacts operates in advance of retransfer to normal source. Interval shall be adjustable from 1 to 30 seconds.",
        answer:"Accessory 31Z"
    },
    {
       question:"The transfer switch shall have load-shed and sequencing capability to allow up to nine selected loads to be disconnected prior to transfer in either direction. It shall be possible to vary the time sequence for reenergizing of the nine loads. ",
       answer:"Accessory 31CJ"
    },
    {
        question:"Engine-Generator Exerciser: Solid-state, programmable-time switch starts engine generator and transfers load to it from normal source for a preset time, then retransfers and shuts down engine after a preset cool-downn period.",
        answer:"Accessory 11BE"
    },
    {
        question:"Initiates exercise cycle at preset intervals adjustable from 7 to 30 days. Running periods shall be adjustable from 10 to 30 minutes. Factory settings shall be for 7-day exercise cycle, 20-minute running period, and 5-minute cool-down period.",
        answer:"Accessory 11BE"
    },
    {
        question:"This accessory includes: Exerciser Transfer Selector Switch: Permits selection of exercise with and without load transfer.",
        answer:"Accessory 11BE"
    },
    {
        question:" This accessory includes: Push-button programming control with digital display of settings.",
        answer:"Accessory 11BE"
    },
    {
        question:"This accessory includes: Integral battery operation of time switch when normal control power is unavailable.",
        answer:"Accessory 11BE"
    },
    {
        question:"Inhibit Transfer Control: Dry contact input overrides automatic transfer control so automatic transfer switch will not connect to emergency power source regardless of condition of normal source. Pilot light indicates override status. ",
        answer:"Accessory 34A & 34B"
    },
    {
        question:"True or False: Accessory 34A is standard on both the 7000 series and the 300 series.",
        answer:"FALSE. Accessory 34A is standard on the 300 series only."
    }
    

] // Array of JSON objects

var flCardEl = document.querySelector(".flip-card")

flCardEl.getElementsByClassName.display = "none"
document.getElementById("cards").addEventListener("click", function () {

    flCardEl.getElementsByClassName.display = "block"
    displayCard()
})
var Qno = 0
var qEl = document.getElementById("question")
var aEl = document.getElementById("Answer")

function displayCard() {
    Qno = Math.floor(Math.random() * questionsDB.length)
    qEl.innerText = questionsDB[Qno].question
    aEl.innerText = questionsDB[Qno].answer
};


//\              /\   
//\\            //\\    
///\\          ////\\     
///\\\        //////\\   
///\\\\      //////\\\\   
////\\\\    //////\\\\\\
////////QUIZ\\\\\\//////
///////      \\\\\///// 
//////        \\\\////   
/////          \\\///    
////            \\//    
///              \/   
//

var timerEl = document.getElementById("clock");
var scoreEl = document.getElementById("score");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var evaluateEl = document.getElementById("evaluate")
var startEl = document.getElementById("start");
var timerObj;
var timerCounter = 60;
var currentQuestion = 0;
var score = 0;
var summaryEl = document.getElementById("summary");
summaryEl.style.display = "none";
option1El.addEventListener("click",checkAnswer);
option2El.addEventListener("click",checkAnswer);
option3El.addEventListener("click",checkAnswer);
option4El.addEventListener("click",checkAnswer);

var question_database = [
    {
        question:"What does HTML stand for? ",
        choiceA:"Hyper Text Makeup language ",
        choiceB:"Henry Talks More than Larry ",
        choiceC:"Hyper Text Markup Language ",
        choiceD:"Hummus Taste More Love ",
        answer:"Hyper Text Markup Language",
    },
    {
        question:"As of 2023, whats the most populated city in the world? ",
        choiceA:"Tookyoo 東京",
        choiceB:"New York City ニューヨーク",
        choiceC:"Itaewon  イテウォン",
        choiceD:"Rio de Janeiro",
        answer:"Tookyoo 東京",
    },
    {
        question:"Whats the fastest animal in world? ",
        choiceA:"The Red-snapping Turtle ",
        choiceB:"The Pronghorn ",
        choiceC:"The Cheetah ",
        choiceD:"The Peregrine Falcon ",
        answer:"The Peregrine Falcon ",
    },
    {
        question:"On record, how fast can a Cheetah run? ",
        choiceA:"220 MPH - 240 MPH",
        choiceB:"150 MPH - 180 MPH",
        choiceC:"50km/h - 75 km/h",
        choiceD:"110 km/h - 120km/h",
        answer:"110 km/h - 120km/h",
    },
    {
        question:"Whats the capital of Colombia",
        choiceA:"Bogoto",
        choiceB:"Cali",
        choiceC:"Medellin",
        choiceD:"Bogota",
        answer:"Bogota",
    }
]

quizEl.style.display = "none";
startEl.addEventListener("click",function(){
    startEl.style.display = "none";
    quizEl.style.display = "block";
    timerObj = setInterval(function(){
        timerEl.textContent = "Time Left: "+timerCounter
        if(timerCounter > 0){
            timerCounter--
        }else{
            endQuiz()
        }
    }, 1000)
    displayQuestion()
})

function endQuiz(){
    clearInterval(timerObj)
    quizEl.style.display = "none";
    summaryEl.style.display = "block";
    document.getElementById("score-result").textContent = timerCounter * score;
    document.getElementById("save-userscore").addEventListener("click", saveDetails)
}


function displayQuestion(){
    questionEl.textContent = question_database[currentQuestion].question;
    option1El.textContent = question_database[currentQuestion].choiceA
    option2El.textContent = question_database[currentQuestion].choiceB
    option3El.textContent = question_database[currentQuestion].choiceC
    option4El.textContent = question_database[currentQuestion].choiceD

};

function checkAnswer(event){
    var userAnswer = event.target.textContent;
    console.log("choice sel",userAnswer)
    if(userAnswer == question_database[currentQuestion].answer){
        score += 5;
    evaluateEl.textContent = "You got it right!"
    }else {
        timerCounter -= 5;
        evaluateEl.textContent = "You got it wrong :( "
    }
    scoreEl.textContent = "Score : "+score;
    if (currentQuestion < question_database.length - 1){
        currentQuestion++;
        displayQuestion();
    }else {
        endQuiz();
    }
};


function saveDetails(event){
    event.preventDefault()
    var user = document.getElementById("user-name").value
    var previousScore = JSON.parse(localStorage.getItem("codequiz")) || []
    previousScore.push({
        user:user,
        finalScore: timerCounter * score
    })
    localStorage.setItem("codequiz",JSON.stringify(previousScore))
    summaryEl.style.display = "none";
    var htmlString = ""
    for(let i=0;i<previousScore.length;i++){
        htmlString += `<h5>User:${previousScore[i].user} ----- ${previousScore[i].finalScore}`
    }
    htmlString += `<br /><br /><a class="btn btn-danger" href="/">Retake Quiz</a>`
    document.getElementById("displayStorage").innerHTML = htmlString;
}