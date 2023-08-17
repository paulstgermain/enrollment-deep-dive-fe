"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useData } from '@/context/dataContext'
import Login from '@/components/login/Login'
import { isAuthenticated } from '@/auth/basicAuth'

export default function Home() {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");

  const data = useData()
  data && console.log(data)
  //check if authenticated
  //if not, redirect to /login
  return (
    <main style={{backgroundColor: 'white!important'}}>
      {/* Conditional rendering to determine if the user is logged in or not
        - if user is authenticated, show landing page
        - if user is NOT authenticated, show login
      */}
      { isAuthenticatedState ? (
        <Container style={{ marginTop: '25px' }}>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
      ) : (
        <Login
        setIsAuthenticatedState={setIsAuthenticatedState}
        keyPhrase={keyPhrase}
        setKeyPhrase={setKeyPhrase}
        />
      )

      }
    </main>
  )
}
