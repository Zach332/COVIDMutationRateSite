import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        COVID Mutation Rate Analysis
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default App;
