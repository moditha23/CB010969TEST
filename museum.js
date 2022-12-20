let btnSubmit = document.getElementById("addtocart");
btnSubmit.addEventListener("click", Addtocart);
btnSubmit.addEventListener("click", Extras);
btnSubmit.addEventListener("click", Subtotal);

let btnSubmit2 = document.getElementById("placeorder");
btnSubmit2.addEventListener("click",Submit);

let extras=0;

//get references to interactive elements
const theForm = document.getElementById("form");
const txtName = document.getElementById("name");
const txtEmail = document.getElementById("email");
const txtForeignadults = document.getElementById("foreignadults");
const txtForeignchild = document.getElementById("foreignchild");
const txtLocaladults = document.getElementById("localadults");
const txtLocalchildu6 = document.getElementById("localchildu6");
const txtLocalchildu15 = document.getElementById("localchildu15");
const txtAnnualpass = document.getElementById("annualpass");
const txtFoodtoken = document.getElementById("foodtoken");

const txtOutput = document.getElementById("output");

function Addtocart(){
        event.preventDefault();

        let name = txtName.value;
        let fa = parseInt(txtForeignadults.value); 
        let fc = parseInt(txtForeignchild.value); 
        let la = parseInt(txtLocaladults.value); 
        let lcu6 = parseInt(txtLocalchildu6.value);
        let lcu15 = parseInt(txtLocalchildu15.value);  
        let ap = parseInt(txtAnnualpass.value); 
        let ft = parseInt(txtFoodtoken.value);

        let nettotal = fa*3000 + fc*2500 + la*2500 + lcu6*500 + lcu15*1000 + ap*5000 + ft*500;

        document.getElementById("no1").innerText=name;
        document.getElementById("no2").innerText=fa;
        document.getElementById("no3").innerText=fc;
        document.getElementById("no4").innerText=la;
        document.getElementById("no5").innerText=lcu6;
        document.getElementById("no6").innerText=lcu15;
        document.getElementById("no7").innerText=ap;
        document.getElementById("no8").innerText=ft;

        document.getElementById("no9").innerText=nettotal;

}

function Extras(){

    let timeslot1=document.getElementById("timeslot1");
    let timeslot2=document.getElementById("timeslot2");
    let timeslot3=document.getElementById("timeslot3");
    let timeslot4=document.getElementById("timeslot4");

    let fa = parseInt(txtForeignadults.value); 
    let fc = parseInt(txtForeignchild.value); 
    let la = parseInt(txtLocaladults.value); 
    let lcu6 = parseInt(txtLocalchildu6.value);
    let lcu15 = parseInt(txtLocalchildu15.value);

    if(timeslot1.checked==true&&fa!=0||fc!=0){
        extras=extras+1000
    }
    else if(timeslot2.checked==true&&fa!=0||fc!=0){
        extras=extras+500
    }
    else if(timeslot3.checked==true&&fa!=0||fc!=0){
        extras=extras+1000
    }
    else if(timeslot4.checked==true&&fa!=0||fc!=0){
        extras=extras+2000
    }



    if(timeslot2.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+250
    }
    else if(timeslot3.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+500
    }
    else if(timeslot4.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+1000
    }


    document.getElementById("no10").innerText=extras;

}

function Subtotal(){

    let fa = parseInt(txtForeignadults.value); 
    let fc = parseInt(txtForeignchild.value); 
    let la = parseInt(txtLocaladults.value); 
    let lcu6 = parseInt(txtLocalchildu6.value);
    let lcu15 = parseInt(txtLocalchildu15.value);  
    let ap = parseInt(txtAnnualpass.value); 
    let ft = parseInt(txtFoodtoken.value);

    let nettotal = fa*3000 + fc*2500 + la*2500 + lcu6*500 + lcu15*1000 + ap*5000 + ft*500;

    let subtotal=nettotal+extras;
    document.getElementById("no11").innerText=subtotal;
}

function Submit(){
    let timeslot1=document.getElementById("timeslot1");
    let timeslot2=document.getElementById("timeslot2");
    let timeslot3=document.getElementById("timeslot3");
    let timeslot4=document.getElementById("timeslot4");

    if(timeslot1.checked==true||timeslot2.checked==true||timeslot3.checked==true||timeslot4.checked==true){
        alert("Thank you for your custom reservation.\nYour train number is:TN0000699.\nA detailed bill will send to your Email.\nHave a nice day!");
    }
    else{
        alert("Incomplete order!\nPlese try Again!")
    }
    
}



