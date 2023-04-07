import './styles/main.scss';
import { Home } from './pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { TicketPage } from './pages/TicketPage';

function App() {

  return (
    <div className="App container">
      <header className="main-header">
        The Jungle FastRider Service
      </header>
      <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/ticket" Component={TicketPage}/>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
