import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'
import { useInput } from "../hooks/useInput";

export default function Login() {

    const { value: emailValue, handleChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput( '', ( value ) => isEmail( value ) & isNotEmpty( value ) );
    const { value: passwordValue, handleChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput( '', ( value ) => hasMinLength( value, 6 ) );
    // const [email, setEmail] = useState( '' );
    // const [password, setPassword] = useState( '' );

    // const handleEmailChange = ( event ) => {
    //   setEmail( event.target.value );
    // }
    // const handlePasswordChange = ( event ) => {
    //   setPassword( event.target.value );
    // }

    function handleSubmit( event ) {
        event.preventDefault();
        if ( emailHasError || passwordHasError )
        {
            return;
        }
        console.log( emailValue, passwordValue );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Login</h2>
            <div className="control-row">
                <Input label={ 'Email' } id={ 'email' } type="email" name="email" onBlur={ handleEmailBlur } onChange={ handleEmailChange } value={ emailValue } error={ emailHasError && 'Please enter valid email' } />
                <Input label={ 'Password' } id={ 'password' } type="password" name="password" onBlur={ handlePasswordBlur } onChange={ handlePasswordChange } value={ passwordValue } error={ passwordHasError && 'Please enter valid password' } />
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">Reset</button>
                <button className="button">Login</button>
                {/* <button type="button" className="button" onClick={ handleSubmit }>Login</button> by default the type will be submit inside the form*/ }
            </p>
        </form>
    );
}
