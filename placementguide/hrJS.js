var myQuestions =[
                    "Tell me about yourself.?",
                    "Why should I hire you?",
                    "What are your strengths and weaknesses?",
                    "Why do you want to work at our company?",
                    "What is the difference between confidence and over confidence?"
                  ];
var Answerr =     [
					"My name is Naveenkumar, I'm pursuing Btech final year with 64%, while coming to my SCC I have done in a new era which is located in Khammam, being on this I have done my intermediate in Narayana at Vijayawada,<br>While coming to My family, we are 5 members including me with one brother and one sister, my father is a farmer which is proud to say that, my mother is a housewife.<br>My hobbies are watching movies, spending time with family, cooking.<br>Now, coming to skills As I think I have enough abilities to perform well in your organisation,<br>Weaknesses is trusting people without knowing anything<br>That's all about me sir.",
					"It will be a great platform to showcase my skills and a great privilege for me to work to your reputed company as I can improve my skills enhance my knowledge and also I will do my best effort for the developer of the company.",
					"My strengths are I am a good learner and help others in their tough time.<br><br>My weakness is I easily believe the person.",
					"I am more interested in better development of career than money. Infosys as Indian mnc IS MOST TRUSTFUL AND reputed company which will surely increase my career graph.",
					"I can do this (confidence).<br><br>I can only do this (over confidence)."
					];


Arr_random=[0,0,0,0,0];flag=1;
var rand_var;

function Load(){
    for(j=0;j<5;j++){
      flag=1;
      rand_var=Math.floor((Math.random() * 5) + 0);
      for(x=0;x<j;x++){
        if(rand_var==Arr_random[x]){
          flag=0;
        }
      }
      if(flag==0){
        j=j-1;
      }
      else{
        Arr_random[j]=rand_var;
      }
    }
  document.getElementById('question').innerHTML="1. "+myQuestions[Arr_random[0]].fontcolor("red")+"<br>"+
                                           "<br>"+Answerr[Arr_random[0]].fontcolor("green");  
document.getElementById("prev").disabled = true;
     document.getElementById("prev").setAttribute("style", "cursor: not-allowed;");
 }

      var count=0;question_num=1;           
function getQuestion(check){

 
if(check==1){
    count++;
    question_num++;
}
if (check==0) {
    count--;
    question_num--;

}
document.getElementById('question').innerHTML=question_num+". "+myQuestions[Arr_random[count]].fontcolor("red")+"<br>"+
                                            "<br>"+Answerr[Arr_random[count]].fontcolor("green");
                                         

if(count==4){
     document.getElementById("next").disabled = true;
     document.getElementById("next").setAttribute("style", "cursor: not-allowed;");
}
else{
    document.getElementById("next").disabled = false;
     document.getElementById("next").setAttribute("style", "cursor: pointer;");
}

if(count==0){
     document.getElementById("prev").disabled = true;
     document.getElementById("prev").setAttribute("style", "cursor: not-allowed;");
}
else{
    document.getElementById("prev").disabled = false;
     document.getElementById("prev").setAttribute("style", "cursor: pointer;");
}

}

