"use client"

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { useData } from "@/context/dataContext"

export default function Navbar() {
    const { state, updateState } = useData();

    const handleTab = (e, newTabNum) => {
        updateState({...state, tabNum: newTabNum})
    }

    return (
        <header>
            <AppBar position="static" style={{ backgroundColor: '#FF4B00' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image 
                            src='/images/BIT_CircledIcon_White.png' 
                            alt='BloomTech logo'
                            width='25'
                            height='25'
                            style={{marginRight: '5px'}}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Enrollment Deep Dive
                        </Typography>

                        <div style={{ marginTop: '5px' }}>
                            <Box>
                                <Tabs
                                    value={state.tabNum}
                                    onChange={handleTab}
                                    textColor='inherit'
                                    TabIndicatorProps={{
                                        title: "indicator",
                                        sx: { backgroundColor: '#00808c', height: 3 }
                                      }}
                                >
                                    <Tab value={0} label="Home" sx={{color: 'white'}} />
                                    <Tab value={1} label="Data" sx={{color: 'white'}} />
                                    <Tab value={2} label="Checklist Analysis" sx={{color: 'white'}} />
                                    {/* <Tab value={3} label="Line Graph" sx={{color: 'white'}} />
                                    <Tab value={4} label="Pie Graph" sx={{color: 'white'}} />
                                    <Tab value={5} label="Scatter Graph" sx={{color: 'white'}} /> */}
                                </Tabs>
                            </Box>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}
