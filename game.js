playerName_1= localStorage.getItem("player1");
playerName_2= localStorage.getItem("player2");

var player1_score= 0;
var player2_score= 0;
question_turn= "player1";
answer_turn= "player2";

document.getElementById("player1name").innerHTML= playerName_1 + ": ";
document.getElementById("player2name").innerHTML= playerName_2 + ": ";
document.getElementById("Qturn_name").innerHTML= playerName_1;
document.getElementById("Aturn_name").innerHTML= playerName_2;

function back() {
    window.location= "index.html";
}

function send() {
    number_1= document.getElementById("number1_input").value;
    number_2= document.getElementById("number2_input").value;
    actual_answer= parseInt(number_1) * parseInt(number_2);
    if(number_1 == "") {
        window.alert("please fill in number");
    }
    else if(number_2 == "") {
        window.alert("please fill in number");
    }
    else{

        question= "<h4>" +number_1 + "X" + number_2 + "</h4>";
        input_box= "Answer: " + "<input type='number' id='input_check_box'>";
        button="<br><br><button type='button' onclick='check();' id='check_btn'>Check</button>";
        row= question + input_box + button;
        document.getElementById("output").innerHTML= row;
        document.getElementById("number1_input").value= "";
        document.getElementById("number2_input").value= "";

        
    }
}

function check() {
    get_answer= document.getElementById("input_check_box").value;

    if(get_answer == actual_answer) {

        if(answer_turn== "player_1") {
     player1_score= player1_score +1;
     document.getElementById("player1score").innerHTML= player1_score;
        }
        else{
            player2_score= player2_score +1;
            document.getElementById("player2score").innerHTML= player2_score;
               }

    }
    if(answer_turn == "player_1") {
        answer_turn= "player_2"
        document.getElementById("Aturn_name").innerHTML=  playerName_2;

        
    }
    else {
        answer_turn= "player_1"
        document.getElementById("Aturn_name").innerHTML= playerName_1;

    }

    if(question_turn == "player_2") {
        question_turn= "player_1"
        document.getElementById("Qturn_name").innerHTML= playerName_1;

        
    }
    else {
        question_turn= "player_2"
        document.getElementById("Qturn_name").innerHTML= playerName_2;

    }
    document.getElementById("output").innerHTML= ""
}

function border_white() {
    document.getElementById("send_btn").style.borderColor= "white";
}

function border_black() {
    document.getElementById("send_btn").style.borderColor= "black";
}