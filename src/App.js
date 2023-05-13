import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Tarefas from './pages/tarefas';
import Produtos from './pages/produtos';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' Component={Produtos}/>
    <Route path='/tarefas' Component={Tarefas}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
