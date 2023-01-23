import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/'
import { checkingCredentials, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'


export const LoginPage = () => {


  const dispatch = useDispatch();
  const {  status, errorMessage } = useSelector( state => state.auth );

  const { email,password, onInputChange }  = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (e) => {
    // console.log(email);
    // console.log({email, password});
    e.preventDefault();
    dispatch( startLoginWithEmailPassword({email, password}) );
    // dispatch( checkingCredentials(status) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn(status) );
  }

  return (
    <AuthLayout title="Login" >
        <form onSubmit={ onSubmit } >
          <Grid container          
          >
            <Grid item xs={12}  sx={{ mt: 2 }} >
              <TextField
                label="Email"
                type="email"
                placeholder="correo@google.cl"
                fullWidth
                name="email"
                onChange={ onInputChange }
                value={ email }
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
                onChange={ onInputChange }
                value={ password }
              />
            </Grid>
            <Grid container 
                  spacing={ 2 } sx={{ mb:2, mt:2 }}
            >
              <Grid item 
                xs={12} md={12}
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error' >{ errorMessage  }</Alert>
              </Grid>
              <Grid item 
                xs={12} md={6}
              >
                <Button variant='contained' fullWidth
                  type="submit"
                  disabled={ isAuthenticating } 
                > Login </Button>
              </Grid>
              <Grid item 
                xs={12} md={6}
              >
                <Button 
                variant='contained' 
                fullWidth 
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticating }
                >  <Google /> <Typography sx={{ ml:1 }} > Google </Typography>  </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent='end' >
              <Link  component={ RouterLink } color='inherit' to="/auth/register"  > Register </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
