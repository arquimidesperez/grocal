import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layout';
// import MainContainer from './containers/MainContainer';
import Login from './screens/Login';
import Register from './screens/Register';
import Produce from './screens/Produce';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Homepage from './screens/Homepage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, [])

  const handleLogin = async(formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
		history.push('/');
	};

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/produce'>
            <Produce />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>        
      </Layout>
    </div>
  );
}

export default App;
