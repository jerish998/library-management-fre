
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/common/LoginPage';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
      </div>
    </AuthProvider>
    
  );
}

export default App;
