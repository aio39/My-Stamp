import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Toolbar } from '@mui/material';
import { invoke } from '@tauri-apps/api';
import { useState } from 'react';
import './App.css';
import SearchIconWrapper from './components/SearchIconWrapper';
import StyledInputBase from './components/SearchInput';
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
    <Box
      sx={{
        width: '100wh',
        height: '100vh',
        flexGrow: 1,
        backgroundColor: 'primary.dark',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
