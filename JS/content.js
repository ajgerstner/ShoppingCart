var shirtSize;
var shirtColor;
const name = document.getElementById("name");
const email= document.getElementById("email");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const submit = document.getElementById("completeOrderButton");




document.getElementById("small").addEventListener("click",function(){shirtSize="S";alert(shirtSize);},false);
document.getElementById("medium").addEventListener("click",function(){shirtSize="M";alert(shirtSize);},false);
document.getElementById("large").addEventListener("click",function(){shirtSize="L";alert(shirtSize);},false);


document.getElementById("green").addEventListener("click",function(){shirtColor="Green";alert(shirtColor);},false);
document.getElementById("red").addEventListener("click",function(){shirtColor="Red";alert(shirtColor);},false);
document.getElementById("black").addEventListener("click",function(){shirtColor="Black";alert(shirtColor);},false);
document.getElementById("blue").addEventListener("click",function(){shirtColor="Blue";alert(shirtColor);},false);


//document.getElementById("searchInput").addEventListener("search", SearchFunction);

//document.getElementById("name").oninput=handler;

class CheckName {
  constructor(input, type) {
    
      
      this.input = name;
    this.type = type;
    this.errors = [];
  }
  
  addError(message) {
    this.errors.push(message);
  }
  
  getMessages() {
    const status = this.input.validity;
  
    if (!this.input.value.match(/[A-Za-z]/g)) {
      this.addError('Entry Must not contain numbers');
    }
    return this.errors;
  }
  
}


// Set up submit listener

submit.addEventListener("click", (event) => {
  event.preventDefault(); // this will stop the standard form submission.
  
  let validateName = new CheckName(name, "name");
  let errorMessages = validateName.getMessages();
  console.log(errorMessages);
  if (errorMessages.length >0) {
    errorMessages.forEach( (err) => {  
        
      var nInsert=name.insertAdjacentHTML('afterend', '<p id="error">' + err + '</p>');
    }
    );
  } else {
      
     var error= document.getElementById("error");
     if(error){
      error.remove();
  }
    alert('Form Submitted');
  }
});
















//created input listeners to display the shipping info
document.getElementById("name").addEventListener("input",function(){
 var orderName=document.getElementById("orderName");
orderName.innerHTML= document.getElementById("name").value;   
   },false);


document.getElementById("email").addEventListener("input",function(){
 var orderEmail=document.getElementById("orderEmail");
orderEmail.innerHTML= document.getElementById("email").value;   
   },false);

document.getElementById("address1").addEventListener("input",function(){
 var orderAddress1=document.getElementById("orderAddress1");
orderAddress1.innerHTML= document.getElementById("address1").value;   
   },false);

document.getElementById("city").addEventListener("input",function(){
 var orderCity=document.getElementById("orderCity");
orderCity.innerHTML= document.getElementById("city").value;   
   },false);

document.getElementById("state").addEventListener("input",function(){
 var orderState=document.getElementById("orderState");
orderState.innerHTML= document.getElementById("state").value;   
   },false);

document.getElementById("zip").addEventListener("input",function(){
 var orderZip=document.getElementById("orderZip");
orderZip.innerHTML= document.getElementById("zip").value;   
   },false);

document.getElementById("country").addEventListener("input",function(){
 var orderCountry=document.getElementById("orderCountry");
orderCountry.innerHTML= document.getElementById("country").value;   
   },false);