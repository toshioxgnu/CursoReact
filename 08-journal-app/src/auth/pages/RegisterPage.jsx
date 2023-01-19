import React from "react"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/'

export const RegisterPage = () => {

  const formData = {
    email: 'jose@email.com',
    password: '123456',
    displayName: 'Jose',
  }


  const { email, password, displayName, formState , onInputChange } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }
 

  return (
    <AuthLayout title="Register" >
        <form onSubmit={ onSubmit } >
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
                onChange={ onInputChange }
              />
            </Grid>
            <Grid container 
                  spacing={ 2 } sx={{ mb:2, mt:2 }}
            >
              <Grid item 
                xs={12} md={6}
              >
                <Button 
                variant='contained' 
                fullWidth 
                type="submit"
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
