import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import React, { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/'
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( (state) => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const formData = {
    email: '',
    password: '',
    displayName: '',
  }

  const formValidations = {
    email: [ (value) => value.includes('@')  , 'The email has to have an @'],
    password: [ (value) => value.length >= 6 , 'Password must be at least 6 characters'],
    displayName: [ (value) => value.length >= 1 , 'must put a name']
  }

  const { 
    email, password, displayName, formState , onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
     
  } = useForm(formData, formValidations);

  // console.log(displayNameValid);

  const onSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);
    dispatch( startCreatingUserWithEmailPassword( formState ) )
  }

  // console.log(formValidations);
 

  return (
    <AuthLayout title="Register" >

        <form onSubmit={ onSubmit } 
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container          
          >
            <Grid item xs={12}  sx={{ mt: 2 }} >
              <TextField
                label="Full Name"
                type="text"
                placeholder="Panchito Suda"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText="Name is required"
              />
            </Grid>
            <Grid item xs={12}  sx={{ mt: 2 }} >
              <TextField
                label="Email"
                type="email"
                placeholder="correo@google.cl"
                fullWidth
                name="email"
                value={ email }
                error={ !!emailValid && formSubmitted }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item 
              xs={12}
              sx={{ mt:2 }}
            >
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                value={ password }
                error={ !!passwordValid && formSubmitted }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid container 
                  spacing={ 2 } sx={{ mb:2, mt:2 }}
              >
              <Grid item 
                xs={12} md={6}
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error' >{ errorMessage  }</Alert>
              </Grid>
              <Grid item 
                xs={12} md={6}
              >
                <Button 
                variant='contained' 
                fullWidth 
                type="submit"
                disabled={isCheckingAuthentication}
                > Sign Up </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent='end' >
              <Link  component={ RouterLink } color='inherit' to="/auth/login"  > Already have an account ? </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
