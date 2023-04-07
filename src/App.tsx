import './styles/main.scss';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TicketPage } from './pages/TicketPage';

function App() {

  return (
    <div className="App container">
      <header className="main-header">
        The Jungle FastRider Service
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/ticket" Component={TicketPage}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
