


    

    function login() {
player1= document.getElementById("player1_input").value;
player2= document.getElementById("player2_input").value;

        if(player1 == "") {
            window.alert("please fill in username");
        }
        else if(player2 == "") {
            window.alert("please fill in username");
        }
        else{



localStorage.setItem("player1", player1);
localStorage.setItem("player2", player2);
            
            window.location= "game.html";
        }
        
        
    
    }

    function white() {
        document.getElementById("loginBtn").style.color= "white";
        document.getElementById("loginBtn").style.fontSize= "17px";
    }

    function black() {
        document.getElementById("loginBtn").style.color= "black";
        document.getElementById("loginBtn").style.fontSize= "15px";
    }