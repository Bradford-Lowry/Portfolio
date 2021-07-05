
import React from "react";
import InputField from "./InputField";

const Contact = () => {

  const inputRef = React.useRef([
    React.createRef(), React.createRef(), React.createRef()
  ]);

  const [data, setData] = React.useState( { } ); 
  const handleChange = ( name, value ) => {
    setData( prev => ( { ...prev, [ name ]: value} ) )

  }

  const submitForm = (e) => {
    e.preventDefault();
  
let isValid = true;

for (let i = 0; i < inputRef.current.length; i++) {
const valid = inputRef.current[i].current.validate()
if (!valid){
  isValid = false;
}

console.log(valid);
}
if (!isValid) {
return
}
}

    return (
<section className = { 'subSection' }>
<h1>contact me</h1>
<form onSubmit = { submitForm }>


<InputField 
ref = {inputRef.current[0]}
name="first"
label = "first name:"
onChange = { handleChange }
validation = {"required|min:3|max:12"}
/>

<InputField 
ref = {inputRef.current[1]}
name="last"
label = "last name:"
onChange = { handleChange }
validation = {"required|min:3|max:12"}
/>

<InputField 
ref = {inputRef.current[2]}
name="email"
label = "email:"
onChange = { handleChange }
validation = {"required|min:3|max:12"}

/>
<button type="submit">send</button>
</form>

</section>
    );

}

export default Contact