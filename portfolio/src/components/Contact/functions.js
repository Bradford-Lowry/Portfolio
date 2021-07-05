function validateForm() {
    alert("ok");
     let x = document.forms["myForm"]["first"].value;
     if (x === "") {
       alert("Name must be filled out");
       return false;
     }
   }