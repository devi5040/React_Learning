import { useState } from "react";

export default function Login() {

  // const [email, setEmail] = useState( '' );
  // const [password, setPassword] = useState( '' );

  // const handleEmailChange = ( event ) => {
  //   setEmail( event.target.value );
  // }
  // const handlePasswordChange = ( event ) => {
  //   setPassword( event.target.value );
  // }

  const [enteredValues, setEnteredValue] = useState( {
    email: '',
    password: ''
  } )

  const handleChange = ( identifier, event ) => {
    setEnteredValue( prevValues => ( {
      ...prevValues, [identifier]: event.target.value
    } ) )
  }


  function handleSubmit( event ) {
    event.preventDefault();
    console.log( 'Submitted' );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={ ( event ) => handleChange( "email", event ) } value={ enteredValues.email } />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={ ( event ) => handleChange( "password", event ) } value={ enteredValues.password } />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* <button type="button" className="button" onClick={ handleSubmit }>Login</button> by default the type will be submit inside the form*/ }
      </p>
    </form>
  );
}
