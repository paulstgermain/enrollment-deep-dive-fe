"use client"
import styles from './page.module.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useData } from '@/context/dataContext'

export default function Home() {
  const data = useData()
  data && console.log(data)
  return (
    <main style={{backgroundColor: 'white!important'}}>
      <Container style={{ marginTop: '25px' }}>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  )
}
