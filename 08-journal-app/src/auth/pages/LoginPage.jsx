import Google from "@mui/icons-material/Google"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'


const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {


  const {  status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

 

  const { email,password, onInputChange }  = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (e) => {
    // console.log(email);
    e.preventDefault();
    // console.log({email, pass word});
    dispatch( startLoginWithEmailPassword({email, password}) );
    // dispatch( checkingCredentials(status) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch( startGoogleSignIn(status) );
  }

  return (
    <AuthLayout title="Login" >
        <form 
          aria-label="submit-form"
          onSubmit={ onSubmit } 
          className="animate__animated animate__fadeIn animate__faster"
        >
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
                inputProps={{ 
                  'data-testid': 'password'
                 }}
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
                aria-label="google-btn"
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
