import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../auth/auth/authSlice";
import { onLogoutCalendar } from "../store/calendar/CalendarSlice";


export const useAuthStore = () => {

    const {
        status,
        user,
        errorMessage,
    } = useSelector( state => state.auth );

    const dispatch = useDispatch();



    const startLogin = async ({ email, password }) => {
        // console.log({ email, password  });

        dispatch(onChecking());

        try {
            
            const { data } = await calendarApi.post('/auth/', { email, password });
            // console.log({data});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime()  );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );



        } catch (error) {
            dispatch( onLogout('credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    const startRegister = async ({ name, email, password }) => {

        dispatch(onChecking());

        try {
            const { data } = await calendarApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime()  );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '---') );
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');

        if(!token) return dispatch( onLogout() );


        try {
            const {
                data
            } = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',  new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {
            console.error(error);
            dispatch(onLogout());
        }

    }

    const startLogout = async () => {
        localStorage.clear();
        dispatch( onLogoutCalendar() );

        dispatch( onLogout() );
    }



    return {
        //Properties
        status,
        user,
        errorMessage,

        //Methods
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }
}