import React, { useContext } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import SignInSignUpContext from './contexts/sign-in-sign-up-context';

import Homepage from './pages/home-page';
import Trips from './pages/trips-page';
import Contacts from './pages/support-page';
import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';
import TripCheckId from './components/trip/trip-check-id';

import PageNotFound from './pages/page-not-found';
import PageLayout from './pages/page-layout';

import './App.css';

function App() {
  /** CONTEXTS */
  const { signIn: { currentUser }} = useContext(SignInSignUpContext);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {/* If route not found */}
        <Route path='*' element={<PageNotFound />} />
        {/* Default page component */}
        <Route index element={<Homepage />} />
        {/* Custom routes and their respective page components */}
        <Route path="trips">
          <Route index element={<Trips />} />
          <Route path=":tripId" element={<TripCheckId />} />
        </Route>
        <Route path="support" element={<Contacts />} />
        { 
          !currentUser && 
            <>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </>
        }
      </Route>
    </Routes>
  );
}

export default App;