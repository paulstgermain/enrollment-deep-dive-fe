"use client"

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ApiIcon from '@mui/icons-material/Api'
import Image from 'next/image'
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { useData } from "@/context/dataContext"

const pages = ['Dashboard', 'Graphs']

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const { state, updateState } = useData();

    const handleTab = (e, newTabNum) => {
        updateState({...state, tabNum: newTabNum})
    }
    // const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget)
    // }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null)
    // }

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
                                    textColor='primary'
                                    indicatorColor='secondary'
                                >
                                    <Tab value={0} label="Data Grid" />
                                    <Tab value={1} label="Bar Graph" />
                                    <Tab value={2} label="Line Graph" />
                                    <Tab value={3} label="Pie Graph" />
                                    <Tab value={4} label="Scatter Graph" />
                                </Tabs>
                            </Box>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}
