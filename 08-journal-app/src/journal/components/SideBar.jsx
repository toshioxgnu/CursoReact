import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWidth }) => {

    const {displayName } = useSelector( state => state.auth );


  return (

    <Box 
        component='nav'
        sx={{
            width: { sm: `${ drawerWidth }px` }, 
            flexShrink: { sm: 0 }, 
        }}
    >
        <Drawer 
            variant='permanent' //temporary
            anchor='left'
            open={ true }
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }

            }}
        >
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>

            <List >
                {
                    ['enero', 'febrero','Marzo','Abril'].map( text => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid
                                container
                            >
                                <ListItemText primary={text} />
                                <ListItemText secondary={'Voluptate nulla deserunt cupidatat magna nisi aliquip officia duis commodo commodo labore ex.'} />
                            </Grid>
                        </ListItemButton>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
