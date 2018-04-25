var myQuestions = [
                    "What is object-oriented programming (OOP)?",
                    "What is a class?",
                    "What is an object?",
                    "What is the relationship between a class and an object?",
                    "Explain the basic features of OOPs."
                  ];
var Answerr =     [
				   "OOP is a technique to develop logical modules, such as classes that contain properties, methods, fields, and events. An object is created in the program to represent a class. Therefore, an object encapsulates all the features, such as data and behavior that are associated to a class. OOP allows developers to develop modular programs and assemble them as software. Objects are used to access data and behaviors of different software modules, such as classes, namespaces, and sharable assemblies. .NET Framework supports only OOP languages, such as Visual Basic .NET, Visual C#, and Visual C++.",
				   "A class describes all the attributes of objects, as well as the methods that implement the behavior of member objects. It is a comprehensive data type, which represents a blue print of objects. It is a template of object. <br><br>A class can be defined as the primary building block of OOP. It also serves as a template that describes the properties, state, and behaviors common to a particular group of objects.<br><br>A class contains data and behavior of an entity. For example, the aircraft class can contain data, such as model number, category, and color and behavior, such as duration of flight, speed, and number of passengers. A class inherits the data members and behaviors of other classes by extending from them..",
				   "They are instance of classes. It is a basic unit of a system. An object is an entity that has attributes, behavior, and identity. Attributes and behavior of an object are defined by the class definition.",
				   "A class acts as a blue-print that defines the properties, states, and behaviors that are common to a number of objects. An object is an instance of the class. For example, you have a class called Vehicle and Car is the object of that class. You can create any number of objects for the class named Vehicle, such as Van, Truck, and Auto.<br><br>The new operator is used to create an object of a class. When an object of a class is instantiated, the system allocates memory for every data member that is present in the class.",
				   "The following are the four basic features of OOP:<br> *<b>Abstraction<b> - Refers to the process of exposing only the relevant and essential data to the users without showing unnecessary information.<br> *<b>Polymorphism<b> - Allows you to use an entity in multiple forms.<br><b>Encapsulation<b> - Prevents the data from unwanted access by binding of code and data in a single unit called object.<br><b>Inheritance<b> - Promotes the reusability of code and eliminates the use of redundant code. It is the property through which a child class obtains all the features defined in its parent class. When a class inherits the common properties of another class, the class inheriting the properties is called a derived class and the class that allows inheritance of its common properties is called a base class."
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

