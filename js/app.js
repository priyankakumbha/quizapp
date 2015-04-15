$(document).ready(function() {
    var questionNumberCounter=0;
    var correctQuestionCounter=0;

    //quiz question array
    var questions = [{
        question: "1/10: Tajmahal is located at  one of the below Indian city?",
        choices: ["Delhi", "Agra", "Mumbai", "Bangalore"],
        qNum : 0,
        correct :"Agra",
        fact: "It was constructed by famous Mughal ruler Shah Jahan, It took 22 years to build the monument",
        image:"./images/tajMehal.jpg"
        },
        {
        question: "2/10: It is believed that, Hanging Gardens have been built in the below ancient city?",
        choices: ["Babylon", "Nalanda", "Dodda", "Argos"],
        qNum : 1,
        correct : "Babylon",
        fact: "The Hanging Gardens are the only one of the Seven Wonders of the ancient world that may not even have existed",
        image:"./images/hangingGarden.jpg"
        },
        {
        question: "3/10: Where is the Hagia Sophia, (the Church of) Holy Wisdom, now known as the Ayasofya Museum located?",
        choices: ["Indonesia", "Cambodia", "Istanbul", "Baluchistan"],
        qNum : 2,
        correct : "Istanbul",
        fact: "Hagia Sophia is covered by a central dome with a diameter of 31 meters (102 feet) and 56 meters high",
        image:"./images/ayasofyaIstanbul.jpg"
        },
        {
        question: "4/10 : Christ the Redeeme is located at one of the below Brazilian city?",
        choices: ["Rio de Janeiro", "Salvador", "Fortaleza", "Manaus"],
        qNum : 3,
        correct :"Rio de Janeiro",
        fact: "The statue weighs 635 metric tons, And is located at the peak of the 2,300 ft Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio",
        image:"./images/redentorStatue.jpg"
        },
        {
        question: "5/10 :Where is the  historical and archaeological city Petra  is located?",
        choices: ["Jordon", "Egypt", "Quatar", "Greece"],
        qNum : 4,
        correct : "Jordon",
        fact: "Petra is famous for its rock-cut architecture and water conduit system",
        image:"./images/petra.jpg"
    },
     {
        question: "6/10 :How long is the Great Wall of China? ",
        choices: ["1500 miles", "5500 miles", "500 miles", "200 miles"],
        qNum : 5,
        correct : "5500 miles",
        fact: "The Great Wall of China was constructed 7th century BC. It is a series of fortification built to protect the empire of China",
        image:"./images/chinaWall.jpg"
    },
     {
        question: "7/10 : Where is the Light House Of Alexandria is located?",
        choices: ["South Africa", "China", "Egypt", "Ireland"],
        qNum : 6,
        correct : "Egypt",
        fact: "it was a tower built between 280 and 247 BC on the island of Pharos at Alexandria, Egypt. Its purpose was to guide sailors into the port of Alexandria",
        image:"./images/alexandria.jpg"
    },
     {
        question: "8/10 :Where is the valley Of Love located ?",
        choices: ["Scotland", "Ireland", "Malaysia", "India"],
        qNum : 7,
        correct : "Ireland",
        fact: "It is one mile high and wide and is beautiful place in Ireland",
        image:"./images/valleyOfLove.jpg"
    },
     {
        question: "9/10 :Where is the  Temple of Artemis is located?",
        choices: ["United Kingdom", "US", "Turkey", "Australia"],
        qNum : 8,
        correct : "Turkey",
        fact: "It was located in Selcuk - Turkey, And was completely rebuilt three times before its eventual destruction in 401",
        image:'./images/templeOfArtemis.jpg'
    },
     {
        question: "10/10 :Victoria Falls is located in the middle of  which river?",
        choices: ["Nile", "Ganga", "Zambezi", "Missouri River"],
        qNum : 9,
        correct : "Zambezi",
        fact: "The waterfalls were named after Queen Victoria of Great Britain by a Scottish missionary.",
        image:"./images/victoriaFall.jpg"
    }]
 


    $("#qcontainer").on("click", "#submit", function(){
    
   
    var previousFact=questions[questionNumberCounter].fact;
    $('#fact-area').text(previousFact);
    
    questionNumberCounter=questionNumberCounter+1;

    if(questionNumberCounter<=9){

    var checkedAnswer=$("input[name=option]:checked").val();
    var correctAnswer=questions[questionNumberCounter-1].correct;
   
    verifyAnswer(checkedAnswer,correctAnswer);
       
    var nextQuestion= questions[questionNumberCounter].question; 
   

    var nextImage= questions[questionNumberCounter].image; 
    
    /** setChoice(questionNumberCounter);*/
    setChoice(questionNumberCounter);


   $("#monumentphoto").css("background-image", "url("+nextImage+")");
    $('.question').text(nextQuestion);
     
}else{

    var checkedAnswer=$("input[name=option]:checked").val();
    var correctAnswer=questions[questionNumberCounter-1].correct;
   
    verifyAnswer(checkedAnswer,correctAnswer);

    $("#retry_button").show();
    $("#submit").hide();
    $("#result-area").text("Congrats you gave correct answers  "+correctQuestionCounter +" out of 10");
    

}
   
   
   
});
      $("#bottom").on("click", "#retry_button", function(){
    
   
     questionNumberCounter=0;
     correctQuestionCounter=0;
     var nextQuestion= questions[questionNumberCounter].question; 
    
    var nextImage= questions[questionNumberCounter].image; 
   

   $("#monumentphoto").css("background-image", "url("+nextImage+")");


    $('.question').text(nextQuestion);
     var nextchoice=  questions[questionNumberCounter].choices;
   
      /** setChoice(questionNumberCounter);*/
      setChoice(questionNumberCounter);
      $("#retry_button").hide();
       $("#submit").show();
      $("#result-area").text('');
      $('#fact-area').text('');
   
     
});
    /*function setChoice(questionNumberCounter){
    var nextchoice=  questions[questionNumberCounter].choices;
    console.log('This is a next choice :'+nextchoice) ;
    $('label[for=option0]').html(questions[questionNumberCounter].choices[0]);
    $('label[for=option1]').html(questions[questionNumberCounter].choices[1]);
    $('label[for=option2]').html(questions[questionNumberCounter].choices[2]);
    $('label[for=option3]').html(questions[questionNumberCounter].choices[3]);

     }*/

      function verifyAnswer(checkedAnswer,correctAnswer){
        if(correctAnswer==checkedAnswer){
         correctQuestionCounter= correctQuestionCounter+1; 
         console.log("correctQuestionCounter************"+correctQuestionCounter) 
         
         }

      }

    function setChoice(questionNumberCounter){
    var nextchoice=  questions[questionNumberCounter].choices;
    console.log('This is a next choice :'+nextchoice) ;
    $("#answer_holder").empty();
    var choiceHtml="<input type='radio' name='option' class='option0' value='"+nextchoice[0]+"'>"+ nextchoice[0]+"</input><br>";
    choiceHtml=choiceHtml+"<input type='radio' name='option' class='option0' value='"+nextchoice[1]+"'>"+ nextchoice[1]+"</input><br>";
    choiceHtml=choiceHtml+"<input type='radio' name='option' class='option0' value='"+nextchoice[2]+"'>"+ nextchoice[2]+"</input><br>";
    choiceHtml=choiceHtml+"<input type='radio' name='option' class='option0' value='"+nextchoice[3]+"'>"+ nextchoice[3]+"</input><br>";
    $("#answer_holder").append(choiceHtml);
     }
    });

    