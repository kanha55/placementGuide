var myQuestions = [
                    "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
                    "What is the sum of two consecutive even numbers, the difference of whose squares is 84?",
                    "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
                    "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
                    "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case."
                  ];
var option =      [
                    "&nbsp;&nbsp;&nbsp;A.  3.6<br>"+
                    "&nbsp;&nbsp;&nbsp;B.  7.2<br>"+
                    "&nbsp;&nbsp;&nbsp;C.  8.4<br>"+
                    "&nbsp;&nbsp;&nbsp;D.  10<br>" ,

                    "&nbsp;&nbsp;&nbsp;A. 130<br>"+
                    "&nbsp;&nbsp;&nbsp;B. 142<br>"+
                    "&nbsp;&nbsp;&nbsp;C. 153<br>"+
                    "&nbsp;&nbsp;&nbsp;D. 165<br>",


                    "&nbsp;&nbsp;&nbsp;A. 65 sec<br>"+
                    "&nbsp;&nbsp;&nbsp;B. 89 sec<br>"+
                    "&nbsp;&nbsp;&nbsp;C. 100 sec<br>"+
                    "&nbsp;&nbsp;&nbsp;D. 150 sec",

                    "&nbsp;&nbsp;&nbsp;A. Rs. 21,000<br>"+
                    "&nbsp;&nbsp;&nbsp;B. Rs. 22,500<br>"+
                    "&nbsp;&nbsp;&nbsp;C. Rs. 25,300<br>"+
                    "&nbsp;&nbsp;&nbsp;D. Rs. 25,800",


                    "&nbsp;&nbsp;&nbsp;A. 4<br>"+
                    "&nbsp;&nbsp;&nbsp;B. 7<br>"+
                    "&nbsp;&nbsp;&nbsp;C. 9<br>"+
                    "&nbsp;&nbsp;&nbsp;D. 13"

                  ];
var Answerr =      [
                   "&nbsp;&nbsp;&nbsp; Answer:- <br>"+
                   "&nbsp;&nbsp;&nbsp;Speed =   600 m/sec.<br>"+
                   "&nbsp;&nbsp;&nbsp;5 x 60<br>"+
                   " &nbsp;&nbsp;&nbsp;= 2 m/sec.<br>"+
                   " &nbsp;&nbsp;&nbsp;Converting m/sec to km/hr (see important formulas section)<br>"+
                   " &nbsp;&nbsp;&nbsp;=    2 x 18/5   km/hr<br>"+
                   "&nbsp;&nbsp;&nbsp;= 7.2 km/hr.<br>",

                   "&nbsp;&nbsp;&nbsp; Answer:- <br>"+
                   "&nbsp;&nbsp;&nbsp; option D<br>"+
                   "&nbsp;&nbsp;&nbsp;Prime numbers 2, 3, 5, 7, 11, 13 are to be added successively.<br>"+
                   "&nbsp;&nbsp;&nbsp; So, 165 is wrong.",

                   "&nbsp;&nbsp;&nbsp; Answer:- <br>"+
                   "&nbsp;&nbsp;&nbsp; option B<br>"+
                   "&nbsp;&nbsp;&nbsp;Speed =     240/24 m/sec = 10 m/sec.<br>"+
                   "&nbsp;&nbsp;&nbsp;Required time = (240 + 650)/10 sec<br>"+
                   "&nbsp;&nbsp;&nbsp;= 89 sec Answer.",

                   "&nbsp;&nbsp;&nbsp; Answer:- <br>"+
                   "&nbsp;&nbsp;&nbsp; option C<br>"+
                   "85 : 18700 = 115 : x<br>"+
                   "Answer :- 25,300",


                   "&nbsp;&nbsp;&nbsp; Answer:- <br>"+
                   "&nbsp;&nbsp;&nbsp; option A<br>"+
                   "&nbsp;&nbsp;&nbsp;Required number = H.C.F. of (91 - 43), (183 - 91) and (183 - 43)<br>"+
                   "&nbsp;&nbsp;&nbsp;= H.C.F. of 48, 92 and 140 = 4."
                   
                   
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
   

  document.getElementById('question').innerHTML="1."+myQuestions[Arr_random[0]].fontcolor("red")+"<br>"+
                                            option[Arr_random[0]].fontcolor("blue")+"<br>"+Answerr[Arr_random[0]].fontcolor("green");  
document.getElementById("prev").disabled = true;
     document.getElementById("prev").setAttribute("style", "cursor: not-allowed;");}

      var count=0;   question_num=1;        
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
                                            option[Arr_random[count]].fontcolor("blue")+"<br>"+Answerr[Arr_random[count]].fontcolor("green");
                                         

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
