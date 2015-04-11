$(document).ready(function() {
    var questionNumberCounter=0;
    var correctQuestionCounter=0;

    //quiz question array
    var questions = [{
        question: "Name the place of the monument shown in the picture?",
        choices: ["china", "India", "United Kingdom", "Italy"],
        qNum : 0,
        correct : 1,
        fact: "It was constructed by famous Mughal ruler Shah Jahan in memory of his beloved wife Mumtaz Mahal..",
        image:"./images/tajMehal.jpg"
        },
        {
        question: "1Name the place of the monument shown in the picture?",
        choices: ["Peru", "Ethiopia", "Indonesia", "Turkey"],
        qNum : 1,
        correct : 1,
        fact: "According to legend an Ethiopian goat herder named Kaldi discovered the coffee plant after his goats ate the coffee berries and began to dance.",
        image:"./images/hangingGarden.jpg"
        },
        {
        question: "2Name the place of the monument shown in the picture?",
        choices: ["Light Roast", "City Roast", "Espresso Roast", "Dark Roast"],
        qNum : 2,
        correct : 0,
        fact: "The roasting process burns sugars and compounds such as caffeine.  Dark or bold roasts actually have less caffeine than lighter roasts.",
        image:"./images/ayasofyaIstanbul.jpg"
        },
        {
        question: "3Name the place of the monument shown in the picture?",
        choices: ["190-195 F", "195-200 F", "200-205 F", "Boiling"],
        qNum : 3,
        correct : 2,
        fact: "Most coffee pots use steam pressure to push water over coffee grounds which creates extraction temperatures that are too high.",
        image:"./images/redentorStatue.jpg"
        },
        {
        question: "4Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 4,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:"./images/petra.jpg"
    },
     {
        question: "5Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 5,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:"./images/chinaWall.jpg"
    },
     {
        question: "6Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 6,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:"./images/alexandria.jpg"
    },
     {
        question: "7Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 7,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:"./images/valleyOfLove.jpg"
    },
     {
        question: "8Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 8,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:'./images/templeOfArtemis.jpg'
    },
     {
        question: "9Name the place of the monument shown in the picture?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 9,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks.",
        image:"./images/victoriaFall.jpg"
    }]



    $("#question_wrapper").on("click", "#submit", function(){
    
    console.log("enter submit button");
    var previousFact=questions[questionNumberCounter].fact;
    $('#fact-area').text(previousFact);
    
    questionNumberCounter=questionNumberCounter+1;

    if(questionNumberCounter<=9){
        var checkedAnswer=$("input[name=option]:checked").val();
    var correctAnswer=questions[questionNumberCounter].correct;
    console.log(correctAnswer+" "+checkedAnswer ) 
    verifyAnswer(checkedAnswer,correctAnswer);

         var nextQuestion= questions[questionNumberCounter].question; 
    console.log('This is a next question string :'+nextQuestion) 

    var nextImage= questions[questionNumberCounter].image; 
    console.log('This is a next image string :'+nextImage) ;
    serChoice(questionNumberCounter);
    $('body').css("background-image", "url("+nextImage+")");  
    $('.question').text(nextQuestion);
     
}else{
    $("#retry_button").show();
    $("#submit").hide();
     $("#result-area").text("Congrats u gave correct answers  "+correctQuestionCounter +" out of 10");
    console.log("all questionsdone");
     console.log("correct answers count"+correctQuestionCounter);

}
   
   
   
});
      $("#question_wrapper").on("click", "#retry_button", function(){
    
    console.log("enter retrybutton button");
     questionNumberCounter=0;
     var nextQuestion= questions[questionNumberCounter].question; 
    console.log('This is a next question string :'+nextQuestion) 
    var nextImage= questions[questionNumberCounter].image; 
    console.log('This is a next image string :'+nextImage) ;

    $('body').css("background-image", "url("+nextImage+")");  
    $('.question').text(nextQuestion);
     var nextchoice=  questions[questionNumberCounter].choices;
    console.log('This is a next choice :'+nextchoice) ;
     serChoice(questionNumberCounter);
      $("#retry_button").hide();
       $("#submit").show();
      $("#result-area").text('');
      $('#fact-area').text('');
   
     
});
      function serChoice(questionNumberCounter){
         var nextchoice=  questions[questionNumberCounter].choices;
    console.log('This is a next choice :'+nextchoice) ;
    $('label[for=option0]').html(questions[questionNumberCounter].choices[0]);
    $('label[for=option1]').html(questions[questionNumberCounter].choices[1]);
    $('label[for=option2]').html(questions[questionNumberCounter].choices[2]);
    $('label[for=option3]').html(questions[questionNumberCounter].choices[3]);
    
      }

      function verifyAnswer(checkedAnswer,correctAnswer){
        if(correctAnswer==checkedAnswer){
         correctQuestionCounter= correctQuestionCounter+1;  


        }

      }
    });

    