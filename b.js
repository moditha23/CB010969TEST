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
const txtForeignad = document.getElementById("foreignad");
const txtForeignch = document.getElementById("foreignch");
const txtLocalad = document.getElementById("localad");
const txtLocalchu6 = document.getElementById("localchu6");
const txtLocalchu15 = document.getElementById("localchu15");
const txtAnnualpass = document.getElementById("annualpass");
const txtFoodtoken = document.getElementById("foodtoken");

const txtOutput = document.getElementById("output");

function Addtocart(){
        event.preventDefault();

        let name = txtName.value;
        let fa = parseInt(txtForeignad.value); 
        let fc = parseInt(txtForeignch.value); 
        let la = parseInt(txtLocalad.value); 
        let lcu6 = parseInt(txtLocalchu6.value);
        let lcu15 = parseInt(txtLocalchu15.value);  
        let ap = parseInt(txtAnnualpass.value); 
        let ft = parseInt(txtFoodtoken.value);

        let nettotal = fa*3000 + fc*2500 + la*2500 + lcu6*500 + lcu15*1000 + ap*5000 + ft*500;

        document.getElementById("x1").innerText=name;
        document.getElementById("x2").innerText=fa;
        document.getElementById("x3").innerText=fc;
        document.getElementById("x4").innerText=la;
        document.getElementById("x5").innerText=lcu6;
        document.getElementById("x6").innerText=lcu15;
        document.getElementById("x7").innerText=ap;
        document.getElementById("x8").innerText=ft;

        document.getElementById("x9").innerText=nettotal;

}

function Extras(){

    let time1=document.getElementById("time1");
    let time2=document.getElementById("time2");
    let time3=document.getElementById("time3");
    let time4=document.getElementById("time4");

    let fa = parseInt(txtForeignad.value); 
    let fc = parseInt(txtForeignch.value); 
    let la = parseInt(txtLocalad.value); 
    let lcu6 = parseInt(txtLocalchu6.value);
    let lcu15 = parseInt(txtLocalchu15.value);

    if(time1.checked==true&&fa!=0||fc!=0){
        extras=extras+1000
    }
    else if(time2.checked==true&&fa!=0||fc!=0){
        extras=extras+500
    }
    else if(time3.checked==true&&fa!=0||fc!=0){
        extras=extras+1000
    }
    else if(time4.checked==true&&fa!=0||fc!=0){
        extras=extras+2000
    }



    if(time2.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+250
    }
    else if(time3.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+500
    }
    else if(time4.checked==true&&la!=0||lcu6!=0||lcu15!=0){
        extras=extras+1000
    }


    document.getElementById("x10").innerText=extras;

}

function Subtotal(){

    let fa = parseInt(txtForeignad.value); 
    let fc = parseInt(txtForeignch.value); 
    let la = parseInt(txtLocalad.value); 
    let lcu6 = parseInt(txtLocalchu6.value);
    let lcu15 = parseInt(txtLocalchu15.value);  
    let ap = parseInt(txtAnnualpass.value); 
    let ft = parseInt(txtFoodtoken.value);

    let nettotal = fa*3000 + fc*2500 + la*2500 + lcu6*500 + lcu15*1000 + ap*5000 + ft*500;

    let subtotal=nettotal+extras;
    document.getElementById("x11").innerText=subtotal;
}

function Submit(){
    let time1=document.getElementById("time1");
    let time2=document.getElementById("time2");
    let time3=document.getElementById("time3");
    let time4=document.getElementById("time4");

    if(time1.checked==true||time2.checked==true||time3.checked==true||time4.checked==true){
        alert("Thank you for your custom reservation.\nYour train number is:TN0000699.\nA detailed bill will send to your Email.\nHave a nice day!");
    }
    else{
        alert("Incomplete order!\nPlese try Again!")
    }
    
}


