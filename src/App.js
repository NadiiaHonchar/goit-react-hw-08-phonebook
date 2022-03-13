import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHead from "./components/AppHead";
import Container from "./components/Container";
import { fetchCurrentUser } from "./redux/auth/authOperation";
import authSelector from "./redux/auth/authSelector";
import PrivateRoute from "./components/PrivateRoute";
import PublikRoute from "./components/PublikRoute";
import Loader from "./components/Loader";


const HomePage = React.lazy(() => import("./pages/HomePage"));
const LogInPage = React.lazy(() => import("./pages/LogInPage.js"));
const RegisterPage = React.lazy(() => import("./pages/RegicterPage.js"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelector.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser && <Loader />}
      {!isFetchingCurrentUser && (
        <div className="container">
          <AppHead></AppHead>
          <Container >
            <Routes>
              <Route
                path="/"
                element={
                  <React.Suspense fallback={<h1>Loading User Route</h1>}>
                    <PublikRoute>
                      <HomePage />
                    </PublikRoute>
                  </React.Suspense>
                }
              />
                <Route
                  path="/contacts"
                  element={
                    <React.Suspense fallback={<h1>Loading User Route</h1>}>
                      <PrivateRoute>
                        <ContactsPage />
                      </PrivateRoute>
                    </React.Suspense>
                  }
                />
                <Route path="*" element={<HomePage />} />
                
              <Route
                path="/register"
                element={
                  <React.Suspense fallback={<h1>Loading User Route</h1>}>
                    <PublikRoute restricted>
                      <RegisterPage />
                    </PublikRoute>
                  </React.Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<h1>Loading User Route</h1>}>
                    <PublikRoute restricted>
                      <LogInPage />
                    </PublikRoute>
                  </React.Suspense>
                }
              />
            </Routes>
          </Container>
        </div>
      )}
    </>
  );
}
