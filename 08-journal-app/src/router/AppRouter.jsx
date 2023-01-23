import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FirebaseAuth } from "../firebase/config"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { login, logout } from "../store/auth"

export const AppRouter = () => {
  const { status } =  useSelector( state => state.auth ); 
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async(user) => {
      if(!user) return dispatch( logout() );
      const { uid, email, displayName, photoURL  } = user;
      dispatch( login({ uid, email, displayName, photoURL  }) );
        // console.log(user);
    } )


  }, [])



  if( status === 'checking' ){
    return <CheckingAuth />
  }

  return (
    <Routes>
        {/* Login y registro */}
        <Route  path="/auth/*" element={ <AuthRoutes/> } />
        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes/> }  />
    </Routes>
  )
}

