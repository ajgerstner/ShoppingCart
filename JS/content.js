const orderSize=document.getElementById("orderSize");
const orderColor=document.getElementById("orderColor");
var shirtSize;
var shirtColor;
const name = document.getElementById("name");
const email= document.getElementById("email");
const address1 = document.getElementById("address1");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const country = document.getElementById("country");
const submit = document.getElementById("completeOrderButton");

const size=document.getElementById("size");
const color=document.getElementById("color");
const shippingProductDetails= document.getElementById("shippingProductDetails");




//declare shirt size and add it to the order form
document.getElementById("small").addEventListener("click",function(){shirtSize="S";
orderSize.innerHTML= shirtSize; },false);
document.getElementById("medium").addEventListener("click",function(){shirtSize="M";orderSize.innerHTML= shirtSize;},false);
document.getElementById("large").addEventListener("click",function(){shirtSize="L"; orderSize.innerHTML= shirtSize;},false);

//declare shirt color and add it to the order form
document.getElementById("green").addEventListener("click",function(){shirtColor="Green";orderColor.innerHTML= shirtColor;},false);
document.getElementById("red").addEventListener("click",function(){shirtColor="Red";orderColor.innerHTML= shirtColor;},false);
document.getElementById("black").addEventListener("click",function(){shirtColor="Black";orderColor.innerHTML= shirtColor;},false);
document.getElementById("blue").addEventListener("click",function(){shirtColor="Blue";orderColor.innerHTML= shirtColor;},false);


//class for verifing errors with order and creating messages for the errors


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
      
      if(country.value === ""){
          
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
  var error= document.getElementById("error");
 
  
       const errorClass = document.getElementsByClassName('error');
        if(errorClass){
      while(errorClass[0]) {
          errorClass[0].parentNode.removeChild(errorClass[0]);
        };
        }
    
  let validateForm = new CheckErrors(name, "name");
  let errorMessages = validateForm.getMessages();
   
    const htmlIdArray = ["name","email"];
   // alert(htmlIdArray[0]);
     
 
    
  
  console.log(errorMessages);
  if (errorMessages.length > 0 ) {
     //could put for loop but when I created a array of the names it keep giving me a error 
           
      if(errorMessages[0] != "Good" ){
      size.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[0] + '</p>');
      }  
      if(errorMessages[1] != "Good"){
      color.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[1] + '</p>');
      } 
        if(errorMessages[2] != "Good"){
      name.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[2] + '</p>');
      } 
       if(errorMessages[3] != "Good"){
      email.insertAdjacentHTML('afterend', '<p class="error">' + errorMessages[3] + '</p>');
      } 
      if(errorMessages[4] != "Good"){
      address1.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[4] + '</p>');
      } 
       if(errorMessages[5] != "Good"){
      city.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[5] + '</p>');
      } 
      if(errorMessages[6] != "Good"){
      state.insertAdjacentHTML('afterend', '<p   class="error">' + errorMessages[6] + '</p>');
      } 
        if(errorMessages[7] != "Good"){
      zip.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[7] + '</p>');
      } 
        if(errorMessages[8] != "Good"){
      country.insertAdjacentHTML('afterend', '<p  class="error">' + errorMessages[8] + '</p>');
      } 

   
  } 
   
    //checking to see if all items in array are the same which is "Good" key word
    Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
};
    if(errorMessages.allValuesSame()){
   alert("Thanks for your Order!!Order has been successfully Submitted");
        
        const product = document.getElementById("product");  
        const shipping = document.getElementById("shipping"); 
        product.remove();
        shipping.remove();


        const orderSummary = document.getElementById("orderSummary");  
    
         orderSummary.insertAdjacentHTML('afterend','<h1 >Order Completed</h1>');  
         orderSummary.remove();
        
        
        const completeOrderButton = document.getElementById("completeOrderButton"); 
         completeOrderButton.insertAdjacentHTML('afterend','<img src="form-assets/circle-check.png" alt="order complete" id="orderComplete">');  
         completeOrderButton.remove();
        
   }
    
});
















//created input listeners to display the shipping info

name.addEventListener("input",function(){
 const orderName=document.getElementById("orderName");
orderName.innerHTML= name.value;   
   },false);


//email.addEventListener("input",function(){
 //const orderEmail=document.getElementById("orderEmail");
//orderEmail.innerHTML= email.value;   
  // },false);

address1.addEventListener("input",function(){
 const orderAddress1=document.getElementById("orderAddress1");
orderAddress1.innerHTML= address1.value;   
   },false);

city.addEventListener("input",function(){
 const orderCity=document.getElementById("orderCity");
orderCity.innerHTML= city.value;   
   },false);

state.addEventListener("input",function(){
 const orderState=document.getElementById("orderState");
orderState.innerHTML= state.value;   
   },false);

zip.addEventListener("input",function(){
  const orderZip=document.getElementById("orderZip");
orderZip.innerHTML= zip.value;   
   },false);

country.addEventListener("input",function(){
 const orderCountry=document.getElementById("orderCountry");
orderCountry.innerHTML= country.value;   
   },false);