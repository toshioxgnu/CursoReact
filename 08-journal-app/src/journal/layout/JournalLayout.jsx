import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../components/Navbar'

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex' }} >
        {/* Navbar */}
        <Navbar  drawerWidth={ drawerWidth } />

        {/* Sidebar */}

        <Box component='main' 
            sx={{ flexGrow: 1, p:3 }}
        >
            {/* Toolbar */}

            {children}

        </Box>
    </Box>
  )
}
