import { SaveRounded } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from '../../hooks'
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"
import { ImageGallery } from "../components/ImageGallery"


export const NoteView = () => {
    
    const dispatch = useDispatch();
    const { active:note, savedMessage, isSaving } = useSelector( state => state.journal );

    const { body, title, date ,onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date(date).toUTCString() ;

        return newDate
    }, [date]);

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState]);

    useEffect(() => {
        if(savedMessage.length >0 ){
            Swal.fire(' Nota Actualizada ', savedMessage, 'success');
        }
    }, [savedMessage]);

    // TODO: Imlementar dispatch
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{   mb: 1}}
    >
        <Grid item >
            <Typography fontSize={ 39 } fontWeight='light'  > { dateString } </Typography>
        </Grid>

        <Grid item >
            <Button 
                sx={{ color: "primary.main" }}
                onClick={ onSaveNote }
                disabled={ isSaving }
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
                name="title"
                value={title}
                onChange={onInputChange}
                sx={{ mb: 1 }}
            />
            <TextField
                type="text"
                variant="filled"
                name="body"
                value={ body }
                onChange={onInputChange}
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
