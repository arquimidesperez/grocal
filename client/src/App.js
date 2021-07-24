import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route>
          </Route>
        </Switch>        
      </Layout>
    </div>
  );
}

export default App;
