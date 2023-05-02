import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { UserContext } from './UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from "./Routes/PublicRoutes";
import ErrorBoundary from './ErrorBoundary';

function App() {
    const [user, setUser] = useState(null);
  return (
      <ErrorBoundary>
          <Router>
          <UserContext.Provider value={{ user, setUser }}>
                <div className="App">
                  {/* Add your navigation, header, or other common components here */}

                    <PublicRoutes />


                  {/* Add your footer or other common components here */}
                </div>
          </UserContext.Provider>
          </Router>
      </ErrorBoundary>
  );

}

export default App;
