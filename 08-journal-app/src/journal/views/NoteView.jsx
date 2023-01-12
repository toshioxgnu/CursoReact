import { SaveRounded } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"


export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{   mb: 1}}
    >
        <Grid item >
            <Typography fontSize={ 39 } fontWeight='light'  > August, 28 2022 </Typography>
        </Grid>

        <Grid item >
            <Button 
                sx={{ color: "primary.main" }}
            >
                <SaveRounded 
                    sx={{ fontSize: 30, mr: 1 }}
                />
                Save
            </Button>
        </Grid>
        <Grid
            container
        >
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Title"
                label="Title"
                sx={{ mb: 1 }}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What Happened Today?"
                sx={{ mb: 1 }}
                minRows="5"
            />            
        </Grid>

        {/* TODO: imageGallery */}
        <ImageGallery />

    </Grid>
  )
}
