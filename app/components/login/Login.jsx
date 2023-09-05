"use client"
import { login } from '../../../auth/basicAuth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image'

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
      <div style={{ height: '90%', display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <Card sx={{ width: 550, height: 350, marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className='login-heading'>
                  <Image 
                    src='/images/BIT_Logo_Stacked_Black.png' 
                    alt='BloomTech logo'
                    width='250'
                    height='50'
                    style={{marginRight: '5px'}}
                  />
                  <h2>Enrollment Deep Dive</h2>
                  <p>Optimize our enrollment journey with this internal tool, rigorously evaluating call interactions between our coaches and prospects, and showcasing insights via detailed graphs for continuous process enhancement.</p>
                </div>
                <form onSubmit={handleLogin}>
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
              </CardContent>
          </Card>
      </div>
    </>
  )
}

export default Login;