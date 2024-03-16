    // JavaScript code for form validation
	// Prevent form from submitting
  let myForm = document.forms.myForm;
  
myForm.addEventListener('submit', function(event){
  event.preventDefault();
})

myForm.addEventListener('submit', validation)

function validation(event) 
{
  let inputField = document.getElementById("inputField");
  // Regular expression pattern for alphanumeric input
  let pattern = /^[a-zA-Z0-9]+$/;
  // Retrieve the input field value
  let inputvalue = inputField.value;
      // Check if the input value matches the pattern
  if (!pattern.test(inputvalue))
  {
     // Invalid input: display error message
    window.alert("The submission does not match the pattern");
    event.preventDefault();
    
  } else {
      // Valid input: display confirmation and submit the form
    window.alert("The submission was valid");
    myForm.submit();
  }
}
  