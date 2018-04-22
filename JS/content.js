const orderSize=document.getElementById("orderSize");
const orderColor=document.getElementById("orderColor");
var shirtSize;
var shirtColor;
const name = document.getElementById("name");
const email= document.getElementById("email");
const address1 = document.getElementById("address1");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const submit = document.getElementById("completeOrderButton");
const error= document.getElementById("error");
const size=document.getElementById("size");
const shippingProductDetails= document.getElementById("shippingProductDetails");




//declare shirt size and add it to the order form
document.getElementById("small").addEventListener("click",function(){shirtSize="S";
orderSize.innerHTML= shirtSize;  alert(shirtSize);},false);
document.getElementById("medium").addEventListener("click",function(){shirtSize="M";orderSize.innerHTML= shirtSize; alert(shirtSize);},false);
document.getElementById("large").addEventListener("click",function(){shirtSize="L"; orderSize.innerHTML= shirtSize; alert(shirtSize);},false);

//declare shirt color and add it to the order form
document.getElementById("green").addEventListener("click",function(){shirtColor="Green";orderColor.innerHTML= shirtColor;alert(shirtColor);},false);
document.getElementById("red").addEventListener("click",function(){shirtColor="Red";orderColor.innerHTML= shirtColor;alert(shirtColor);},false);
document.getElementById("black").addEventListener("click",function(){shirtColor="Black";orderColor.innerHTML= shirtColor;alert(shirtColor);},false);
document.getElementById("blue").addEventListener("click",function(){shirtColor="Blue";orderColor.innerHTML= shirtColor;alert(shirtColor);},false);


//document.getElementById("searchInput").addEventListener("search", SearchFunction);

//document.getElementById("name").oninput=handler;



class CheckErrors {
  constructor(input, type) {
   
    this.input = input;
    this.type = type;
    this.errors = [];
    
  }
  
  addError(message) {
    this.errors.push(message);
  }
  
  getMessages() {
   // const status = this.input.validity;
  
     if(shirtSize == null) {
         this.addError("Must select a shirt Size");
     }else {
          this.addError("Good");
    }
       if(shirtColor == null) {
         this.addError("Must select a shirt Color");
     }else {
          this.addError("Good");
    }
      
    if (!name.value.match(/[A-Za-z]\s[A-Za-z]/g)) {
      this.addError("Full name must not contain numbers and must have a space between first and last name");
    } else {
          this.addError("Good");
    }
   if (!email.validity.valid) {
      this.addError("Email must be formated correctly");
    }else {
          this.addError("Good");
    }
    if(!address1.value.match(/([0-9]\s[A-Za-z])/g)){
        this.addError("Address must have number then name of street");
    }else {
          this.addError("Good");
    }
      if (!city.validity.valid ) {
      this.addError("City must not contain numbers");
    }else {
          this.addError("Good");
    }
       if (!state.validity.valid ) {
      this.addError("State must not contain numbers");
    }else {
          this.addError("Good");
    }
       if (!zip.validity.valid ) {
      this.addError("Zip must not contain letters");
    }else {
          this.addError("Good");
    }
      if(country == null){
          
         this.addError("Please select a County");
         }else {
          this.addError("Good");
    }
    return this.errors;
  }
  
}

 
var nInsert;
// Set up submit listener


submit.addEventListener("click", (event) => {
  event.preventDefault(); // this will stop the standard form submission.
  
  let validateForm = new CheckErrors(name, "name");
  let errorMessages = validateForm.getMessages();
  console.log(errorMessages);
  if (errorMessages.length > 0 ) {
      if(errorMessages[0] != "Good"){
      size.insertAdjacentHTML('afterend', '<p id="error">' + errorMessages[1] + '</p>');
      } 
     for (i = 0; i < errorMessages.length; i++){
       
       //   if(errorMessages[i] !="Good"){
          orderCountry.insertAdjacentHTML('afterend', '<p id="error">' + errorMessages[i] + '</p>');
         
         
       //   }
         
         
      }
      
  } else {
     alert('Form Submitted');
  }
});
















//created input listeners to display the shipping info

name.addEventListener("input",function(){
 var orderName=document.getElementById("orderName");
orderName.innerHTML= document.getElementById("name").value;   
   },false);


email.addEventListener("input",function(){
 var orderEmail=document.getElementById("orderEmail");
orderEmail.innerHTML= document.getElementById("email").value;   
   },false);

address1.addEventListener("input",function(){
 var orderAddress1=document.getElementById("orderAddress1");
orderAddress1.innerHTML= document.getElementById("address1").value;   
   },false);

city.addEventListener("input",function(){
 var orderCity=document.getElementById("orderCity");
orderCity.innerHTML= document.getElementById("city").value;   
   },false);

state.addEventListener("input",function(){
 var orderState=document.getElementById("orderState");
orderState.innerHTML= document.getElementById("state").value;   
   },false);

zip.addEventListener("input",function(){
 var orderZip=document.getElementById("orderZip");
orderZip.innerHTML= document.getElementById("zip").value;   
   },false);

country.addEventListener("input",function(){
 var orderCountry=document.getElementById("orderCountry");
orderCountry.innerHTML= document.getElementById("country").value;   
   },false);