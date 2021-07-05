import React, { forwardRef, useImperativeHandle } from 'react';

const InputField = forwardRef((props, ref) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
        setError("");
        props.onChange(event.target.name, event.target.value)
    }

    const validate = () => {
        if (props.validation) {
            const rules = props.validation.split("|");

            for (let n=0; n < rules.length; n++) {
                const current = rules[n];

                if (current === "required") {
                    if (!value) {
                        setError("please fill in this field");
                        return false;
                    }
                }
                const pair = current.split(":")
                switch (pair[0]) {
                    case "min":
                        if (value < pair[1]) {
                            setError(`too few characters, must be at least ${pair[1]}`);
                            return false
                            break;
                        }
                       
                    case "max":
                        if (value > pair[2]) {
                            setError(`too many characters, must be no more than ${pair[2]}`);
                            return false
                            break;
                        }
                        
                    default:
                        break;
                }
            }

        }
        return true;
    }

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate()
        }
    })

    return (

        <div>

            {props.label && (
                <label>{props.label}</label>
            )}
            <input placeholder={props.placeholder}
                name={props.name}
                onChange={(event) => handleChange(event)}
                type={props.type}
                value={props.value}
                autocomplete={props.autoComplete}
            />
            {error && (
                <p className="error">{ error }</p>
            )}
        </div>
    );

})

InputField.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autocomplete: "off",
    validation: "",

}

export default InputField