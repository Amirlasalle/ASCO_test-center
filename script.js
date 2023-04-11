var questionsDB = [
    {
        studyQuestion: "what does HTML stand for? ",
        studyAnswer: "Hyper text markup language. ",


    },
    {
        studyQuestion: "what does CSS stand for?",
        studyAnswer: "cascading style sheet"
    },
    {
        studyQuestion:"Load Test Switch: Load test switch to simulate normal power failure. (Maintained type).",
        studyAnswer:"Accessory 5L"
        
    }
    ,
    {
        studyQuestion:"Transfer Override Switch: Overrides automatic retransfer control so automatic transfer switch will remain connected to emergency power source regardless of condition of normal source. Pilot light indicates override status.",
        studyAnswer:"Accessory 6DL"
    },
    {
        studyQuestion:"Signal-Before-Transfer Contacts: A set of normally open/normally closed dry contacts operates in advance of retransfer to normal source. Interval shall be adjustable from 1 to 30 seconds.",
        studyAnswer:"Accessory 31Z"
    },
    {
        studyQuestion:"The transfer switch shall have load-shed and sequencing capability to allow up to nine selected loads to be disconnected prior to transfer in either direction. It shall be possible to vary the time sequence for reenergizing of the nine loads. ",
        studyAnswer:"Accessory 31CJ"
    },
    {
        studyQuestion:"Engine-Generator Exerciser: Solid-state, programmable-time switch starts engine generator and transfers load to it from normal source for a preset time, then retransfers and shuts down engine after a preset cool-downn period.",
        studyAnswer:"Accessory 11BE"
    },
    {
        studyQuestion:"Initiates exercise cycle at preset intervals adjustable from 7 to 30 days. Running periods shall be adjustable from 10 to 30 minutes. Factory settings shall be for 7-day exercise cycle, 20-minute running period, and 5-minute cool-down period.",
        studyAnswer:"Accessory 11BE"
    },
    {
        studyQuestion:"This accessory includes: Exerciser Transfer Selector Switch: Permits selection of exercise with and without load transfer.",
        studyAnswer:"Accessory 11BE"
    },
    {
        studyQuestion:" This accessory includes: Push-button programming control with digital display of settings.",
        studyAnswer:"Accessory 11BE"
    },
    {
        studyQuestion:"This accessory includes: Integral battery operation of time switch when normal control power is unavailable.",
        studyAnswer:"Accessory 11BE"
    },
    {
        studyQuestion:"Inhibit Transfer Control: Dry contact input overrides automatic transfer control so automatic transfer switch will not connect to emergency power source regardless of condition of normal source. Pilot light indicates override status. ",
        astudyAnswer:"Accessory 34A & 34B"
    },
    {
        studyQuestion:"True or False: Accessory 34A is standard on both the 7000 series and the 300 series.",
        studyAnswer:"FALSE. Accessory 34A is standard on the 300 series only."
    }
    

] // Array of JSON objects

var flCardEl = document.querySelector(".flip-card")

flCardEl.getElementsByClassName.display = "none"
document.getElementById("cards").addEventListener("click", function () {

    flCardEl.getElementsByClassName.display = "block"
    displayCard()
})
var Qno = 0
var qEl = document.getElementById("studyQuestion")
var aEl = document.getElementById("studyAnswer")

function displayCard() {
    Qno = Math.floor(Math.random() * questionsDB.length)
    qEl.innerText = questionsDB[Qno].studyQuestion
    aEl.innerText = questionsDB[Qno].studyAnswer
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
};

// var messageEls = document.getElementsByClassName('message')
// console.log(messageEls)

    
// for (let i = 0; i < messageEls.length; i++) {
//     console.log(messageEls[i].textContent)
//     messageEls[i].textContent = 'yo'
// }

//quiz 2


var timerEl2 = document.getElementById("clock2");
var scoreEl2 = document.getElementById("score2");
var quizEl2 = document.getElementById("quiz2");
var questionEl2 = document.getElementById("question2");
var option1El2 = document.getElementById("option1-2");
var option2El2 = document.getElementById("option2-2");
var option3El2 = document.getElementById("option3-2");
var option4El2 = document.getElementById("option4-2");
var evaluateEl2 = document.getElementById("evaluate2")
var startEl2 = document.getElementById("start2");
var timerObj2;
var timerCounter2 = 60;
var currentQuestion2 = 0;
var score2 = 0;
var summaryEl2 = document.getElementById("summary2");
summaryEl2.style.display = "none";
option1El2.addEventListener("click",checkAnswer2);
option2El2.addEventListener("click",checkAnswer2);
option3El2.addEventListener("click",checkAnswer2);
option4El2.addEventListener("click",checkAnswer2);

var question_database2 = [
    {
        question2:"What does HTML NOT stand for? ",
        choiceA2:"Hyper Text Makeup language ",
        choiceB2:"Henry Talks More than Larry ",
        choiceC2:"Hyper Text Markup Language ",
        choiceD2:"Hummus Taste More Love ",
        answer2:"Hummus Taste More Love ",
    },
    {
        question2:"As of 2023, whats the most populated city in the USA ",
        choiceA2:"Tookyoo 東京",
        choiceB2:"New York City ニューヨーク",
        choiceC2:"Itaewon  イテウォン",
        choiceD2:"Rio de Janeiro",
        answer2:"New York City ニューヨーク",
    },
    {
        question2:"Whats the NOT fastest animal in world? ",
        choiceA2:"The Red-snapping Turtle ",
        choiceB2:"The Pronghorn ",
        choiceC2:"The Cheetah ",
        choiceD2:"The Peregrine Falcon ",
        answer2:"The Red-snapping Turtle ",
    },
    {
        question2:"On record, how fast can a Cheetah run? ",
        choiceA2:"220 MPH - 240 MPH",
        choiceB2:"150 MPH - 180 MPH",
        choiceC2:"50km/h - 75 km/h",
        choiceD2:"110 km/h - 120km/h",
        answer2:"110 km/h - 120km/h",
    },
    {
        question2:"Whats the capital of Colombia",
        choiceA2:"Bogoto",
        choiceB2:"Cali",
        choiceC2:"Medellin",
        choiceD2:"Bogota",
        answer2:"Bogota",
    }
]

quizEl2.style.display = "none";
startEl2.addEventListener("click",function(){
    startEl2.style.display = "none";
    quizEl2.style.display = "block";
    timerObj2 = setInterval(function(){
        timerEl2.textContent = "Time Left: "+timerCounter2
        if(timerCounter2 > 0){
            timerCounter2--
        }else{
            endQuiz2()
        }
    }, 1000)
    displayQuestion2()
})

function endQuiz2(){
    clearInterval(timerObj2)
    quizEl2.style.display = "none";
    summaryEl2.style.display = "block";
    document.getElementById("score-result2").textContent = timerCounter2 * score2;
    document.getElementById("save-userscore2").addEventListener("click", saveDetails2)
}


function displayQuestion2(){
    questionEl2.textContent = question_database2[currentQuestion2].question2;
    option1El2.textContent = question_database2[currentQuestion2].choiceA2
    option2El2.textContent = question_database2[currentQuestion2].choiceB2
    option3El2.textContent = question_database2[currentQuestion2].choiceC2
    option4El2.textContent = question_database2[currentQuestion2].choiceD2

};

function checkAnswer2(event){
    var userAnswer2 = event.target.textContent;
    console.log("choice sel",userAnswer2)
    if(userAnswer2 == question_database2[currentQuestion2].answer2){
        score2 += 5;
    evaluateEl2.textContent = "You got it right!"
    }else {
        timerCounter2 -= 5;
        evaluateEl2.textContent = "You got it wrong :( "
    }
    scoreEl2.textContent = "Score : "+score2;
    if (currentQuestion2 < question_database2.length - 1){
        currentQuestion2++;
        displayQuestion2();
    }else {
        endQuiz2();
    }
};


function saveDetails2(event){
    event.preventDefault()
    var user2 = document.getElementById("user-name2").value
    var previousScore2 = JSON.parse(localStorage.getItem("codequiz2")) || []
    previousScore2.push({
        user2:user2,
        finalScore2: timerCounter2 * score2
    })
    localStorage.setItem("codequiz2",JSON.stringify(previousScore2))
    summaryEl2.style.display = "none";
    var htmlString2 = ""
    for(let i=0;i<previousScore2.length;i++){
        htmlString2 += `<h5>User:${previousScore2[i].user2} ----- ${previousScore2[i].finalScore2}`
    }
    htmlString2 += `<br /><br /><a class="btn btn-danger" href="/">Retake Quiz</a>`
    document.getElementById("displayStorage").innerHTML = htmlString2;
}