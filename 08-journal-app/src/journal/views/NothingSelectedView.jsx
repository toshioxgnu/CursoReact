import { StarBorderOutlined, StartOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { color } from "@mui/system"


export const NothingSelectedView = () => {
  return (  
    <Grid  container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: 'calc( 100vh - 110px )',backgroundColor: 'primary.main', borderRadius: 5}}
    >
        <Grid item xs={ 12 } sx={{ textAlign: 'center', color: 'white' }}>
            <StarBorderOutlined/>
        </Grid>
        <Grid item xs={ 12 } sx={{ textAlign: 'center', color: 'white'  }}>
            <Typography variant="h5" sx={{ mb:1 }}>Select something</Typography>
        </Grid>
    </Grid>
  )
}
