import { Copyright } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { invoke } from '@tauri-apps/api';
import { useState } from 'react';
import './App.css';

const Button2 = () => {
  const greetHandler = () => {
    // now we can call our Command!
    // Right-click the application background and open the developer tools.
    // You will see "Hello, World!" printed in the console!
    invoke('greet', { name: 'World' })
      // `invoke` returns a Promise
      .then((response) => console.log(response));
  };

  return <button onClick={greetHandler}>Greet!</button>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vite.js example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
