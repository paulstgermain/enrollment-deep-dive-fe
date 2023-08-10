import Image from 'next/image'
import styles from './page.module.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Navbar from '../components/layout/Navbar'

export default function Home() {
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
