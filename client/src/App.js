import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import Produce from './screens/Produce';
import ProduceCreate from './screens/ProduceCreate';
import ProduceDetail from './screens/ProduceDetails';
import Seasonal from './screens/Seasonal';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Homepage from './screens/Homepage';
import {deleteProduce, getAllProduces, postProduce, putProduce} from './services/produces';
import {getAllSeasons} from './services/seasons';

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

  // things to move to mainContainer if I can figure out the routes
  const [produceList, setProduceList] = useState([]);
  const [seasonsList, setSeasonsList] = useState([]);

	useEffect(() => {
		const fetchProduce = async () => {
			const produceData = await getAllProduces();
			setProduceList(produceData);
		};
		const fetchSeasons = async () => {
			const seasonData = await getAllSeasons();
			setSeasonsList(seasonData);
		};
		fetchProduce();
		fetchSeasons();
	}, []);

  const handleCreate = async (formData) => {
		const produceData = await postProduce(formData);
		setProduceList((prevState) => [...prevState, produceData]);
		history.push('/produces');
	};

	const handleUpdate = async (id, formData) => {
		const produceData = await putProduce(id, formData);
		setProduceList((prevState) =>
			prevState.map(([produce]) => {
				return produce.id === Number(id) ? produceData : produce;
			})
		);
		history.push('/produces');
	};

	const handleDelete = async (id) => {
		await deleteProduce(id);
		setProduceList((prevState) => prevState.filter((produce) => produce.id !== id));
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
          <Route path='/seasons'>
            <Seasonal seasonsList={seasonsList}/>
          </Route>
          <Route path='/produces/new'>
            <ProduceCreate handleCreate={handleCreate}/>
          </Route>
          <Route path='/produces/:id'>
            <ProduceDetail seasonsList={seasonsList} produceList={produceList}/>
          </Route>
          <Route path='/produces'>
            <Produce produceList={produceList}/>
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
