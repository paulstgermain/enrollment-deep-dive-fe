"use client"
import { login } from '../../auth/basicAuth';

const Login = ({
    setIsAuthenticatedState,
    keyPhrase,
    setKeyPhrase
}) => {

    const handleLogin = (event) => {
        event.preventDefault();
    
        if (login(keyPhrase)) {
          setIsAuthenticatedState(true);
        } else {
          alert("Invalid key phrase");
        }
    };
    
    const handleKeyPhraseChange = (event) => {
        setKeyPhrase(event.target.value);
    };

  return (
    <>
    <div className='login-header'>
      {/* <img src={stacked_logo} alt="BIT Logo" /> */}
    </div>
      <div className='login-container'>
        <div className='login-heading'>
          <h2>Enrollment Deep Dive</h2>
          <p>Optimize our enrollment journey with this internal tool, rigorously evaluating call interactions between our coaches and prospects, and showcasing insights via detailed graphs for continuous process enhancement.</p>
        </div>
      <form onSubmit={handleLogin} className='login-form'>
        <input
            className='input'
            type="text"
            name="password"
            placeholder="Password"
            value={keyPhrase}
            onChange={handleKeyPhraseChange}
        />
        <button type="submit" className='submit-button button'>Login</button>
      </form>
      </div>
    </>
  )
}

export default Login;