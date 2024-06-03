// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Button, Container, Typography } from '@mui/material';

const LoginButton = () => {
  const { dispatch } = useAuth();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { name: 'User' } });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

const LogoutButton = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

const UserProfile = () => {
  const { state } = useAuth();

  if (!state.user) return <Typography variant="h6">Not logged in</Typography>;

  return <Typography variant="h6">Welcome, {state.user.name}</Typography>;
};

function App() {
  return (
      <Provider store={store}>
        <AuthProvider>
          <Container>
            <Typography variant="h4" gutterBottom>My App</Typography>
            <UserProfile />
            <LoginButton />
            <LogoutButton />
          </Container>
        </AuthProvider>
      </Provider>
  );
}

export default App;
