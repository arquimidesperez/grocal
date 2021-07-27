import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import Produce from './screens/Produce';
import ProduceCreate from './screens/ProduceCreate';
import Seasonal from './screens/Seasonal';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Homepage from './screens/Homepage';
import {deleteProduce, getAllProduces, postProduce, putProduce} from './services/produces';
import {getAllSeasons} from './services/seasons';
import ProduceEdit from './screens/ProduceEdit';
import ProduceDetails from './screens/ProduceDetails';

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
    history.push('/produces');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/produces');
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
    history.push('/produces');
	};


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login
              handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister} />
          </Route>
          <Route path='/seasons'>
            <Seasonal
              seasonsList={seasonsList} />
          </Route>
          <Route path='/produces/new'>
            <ProduceCreate
              seasonsList={seasonsList}
              handleCreate={handleCreate} />
          </Route>
          <Route path='/produces/:id/edit'>
            <ProduceEdit
              seasonsList={seasonsList}
              produceList={produceList}
              handleUpdate={handleUpdate} />
          </Route>
          <Route path='/produces/:id'>
            <ProduceDetails
              seasonsList={seasonsList}
              produceList={produceList}
              handleDelete={handleDelete} />
          </Route>
          <Route path='/produces'>
            <Produce
              produceList={produceList} />
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
