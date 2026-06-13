import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { UserProvider } from './contexts/User';

function App() {
  return (
    <Router>
      <UserProvider>
        <Home />
      </UserProvider>
    </Router>
  );
}

export default App;
