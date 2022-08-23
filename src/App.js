import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';

function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to={'/'}> Home </Link></li>
            <li> <Link to={'/super-heroes'}> Traditional SuperHeroes </Link></li>
            <li> <Link to={'/rq-super-heroes'}> RQ SuperHeroes  </Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          
        </Routes>

      </div>
    </Router>
  )
}

export default App;
