import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/'


export const LoginPage = () => {

  const { email,password, onInputChange }  = useForm({
    email: 'jozho.g@gmail.com',
    password: '123456'
  });

  const onSubmit = (e) => {
    // console.log(email);
    e.preventDefault();
    console.log({email, password});
    
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
                xs={12} md={6}
              >
                <Button variant='contained' fullWidth
                  type="submit" 
                > Login </Button>
              </Grid>
              <Grid item 
                xs={12} md={6}
              >
                <Button variant='contained' fullWidth >  <Google /> <Typography sx={{ ml:1 }} > Google </Typography>  </Button>
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
