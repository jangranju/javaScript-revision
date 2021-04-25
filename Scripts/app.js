// IIFE -> immediately invoked function expression

(function(){

    let heading1 = document.getElementById("h1");
    heading1.textContent = "Hello, World!";

    let paragraph = document.getElementById("paragraph");
    

    heading1.addEventListener("click", function(){
        
        if (heading1.style.color == "red"){
            heading1.style.color = "green";
        }
        else
        {
            heading1.style.color = "red";
        } 

    });

    paragraph.addEventListener("click", function(){

        if (paragraph.style.fontSize == "20px"){
            paragraph.style.fontSize = "30px";
        }
        else
        {
            paragraph.style.fontSize = "20px";
        }

    });

    let mainDiv  = document.getElementById("mainDiv");

    let pTag = document.createElement("p");
    pTag.style.color = "red";
    pTag.textContent = "This is the list of Topics to be covered in Javascript: ";

    mainDiv.append(pTag);


    let uTag = document.createElement("ol");
     uTag.style.listStyle = "lower-roman";
     uTag.setAttribute("start","3");

    let liTag1 = document.createElement("li");
    liTag1.textContent = "DOM";

    let liTag2 = document.createElement("li");
    liTag2.textContent = "Operators";

    let liTag3 = document.createElement("li");
    liTag3.textContent = "DataTypes";

    let liTag4 = document.createElement("li");
    liTag4.textContent = "Methods";
    
    uTag.append(liTag1);
    uTag.append(liTag2);
    uTag.append(liTag3);
    uTag.append(liTag4);

    mainDiv.append(uTag);
   
    

    // // declaring variblwe with 'let'

    // let a = 2;
    // let b = 4;
    // let c = a+b;

    // if (b>5){
    //     console.log("b is greater");
    // }
    // else
    // {
    //   console.log("false");
    // }
    // console.log(c);





    

})();