import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar/pages/CalendarPage";

export const AppRouter = () => {
  const authStatus ='authenticated' ; // 'authenticated'; 

  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
    </Routes>
  );
};
