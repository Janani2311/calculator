
let root = document.getElementById("root");

 let heading = document.createElement("h1");
 heading.innerText="Calculator";
 root.appendChild(heading);


    let parent = document.createElement("div");
    parent.setAttribute("class","outer-div");

    let inputDiv = document.createElement("div");
    
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","display-box");
    input.addEventListener("keydown",(event)=>keydownFun(event));
    input.addEventListener("keyup",(event)=>keyupFun(event));
    inputDiv.append(input);

    parent.append(inputDiv);

    let buttons = document.createElement("div");
    buttons.setAttribute("class","button-wrapper");

    parent.append(buttons);

    let button = '';
    let arrCalc = ["c","@","MR",".",'M+','M-','MC','*',7, 8, 9,"/", 4, 5, 6,"-",1 , 2, 3,"+",0,"00","=","%"];
    for(let i=0; i < arrCalc.length ; i++){
        button = document.createElement("button"); 


        if(!isNaN(arrCalc[i]) || arrCalc[i] == '00'){
        button.setAttribute("id",`btn${arrCalc[i]}`);
        }
        else if(arrCalc[i] == 'c')
        button.setAttribute("id","btn10");
        else if(arrCalc[i] == '@')
        button.setAttribute("id","btn11");
        else if(arrCalc[i] == '.')
        button.setAttribute("id","btn12");
        else if(arrCalc[i] == '+')
        button.setAttribute("id","btn13");
        else if(arrCalc[i] == '-')
        button.setAttribute("id","btn14");
        else if(arrCalc[i] == '*')
        button.setAttribute("id","btn15");
        else if(arrCalc[i] == '/')
        button.setAttribute("id","btn16");
        else if(arrCalc[i] == '=')
        button.setAttribute("id","btn17");
        else if(arrCalc[i] == 'M+')
        button.setAttribute("id","btn18");
        else if(arrCalc[i] == 'M-')
        button.setAttribute("id","btn19");
        else if(arrCalc[i] == 'MC')
        button.setAttribute("id","btn20");
        else if(arrCalc[i] == '%')
        button.setAttribute("id","btn21");
        else if(arrCalc[i] == 'MR')
        button.setAttribute("id","btn22");

        button.setAttribute("value",`${arrCalc[i]}`);
        button.setAttribute("class","btn btn-secondary num-button");
        button.addEventListener("click",()=>display(arrCalc[i]));
        if(arrCalc[i] == '@')
        button.innerHTML= "<img src=\"./assets/left-arrow.png\" id = \"arrow\">";
        else
        button.innerText= arrCalc[i];
        buttons.append(button);
    }
    root.appendChild(parent);
    
    let total = 0;
    let displayText = document.getElementById("display-box");
    
    function display(val) { 
        
        if(!isNaN(val)){
            displayText.value += val;
        }else if(val == '+' || val == '-' || val == '*' || val == '/' || val == '.' || val == '%'){
            displayText.value += val;
        }else if(val == '='){
            try{
            total = eval(displayText.value);
            }
            catch(error){
            total = "Error";
            }
            displayText.value = '';
            displayText.value += total;      
        }else if(val == 'c'){
            displayText.value = ' ';
        }else if(val == '@'){
            displayText.value  = displayText.value.substring(0, displayText.value.length - 1);
        }else if(val == 'MR'){
            setData(total);
        }else if(val == 'M+'){
            console.log( typeof getData())
            displayText.value = '';
            displayText.value += parseInt(getData())+parseInt(total); 
            setData(displayText.value);
        }else if(val == 'M-'){
            displayText.value = '';
            displayText.value += parseInt(getData())-parseInt(total);
            setData(displayText.value);
        }else if(val == 'MC'){
            localStorage.clear();
        }else{
            alert("press correct button");
        }
    } 

    // for not allowing users to press keys other than numbers on the keyboard
    function keydownFun(event){
        if(isNaN(event.key)){
        event.preventDefault();
        }
        
    }

    function keyupFun(event){
        if(isNaN(event.key)){
            alert("only numbers are allowed");
            
           }
    }

    // using localstorage functions for Memory functions in calculator
    function setData(total){
        localStorage.setItem("result",total)
        
    }

    function getData(){
        let item = localStorage.getItem("result");
        return item;
        
    }
  
    
