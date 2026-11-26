// Modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// CSS
import './App.scss'

// Pages
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import TopRated from './pages/TopRated'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <nav>
        <img src='mobie.png' width={64} />
        <h1 style={{ fontWeight: 400 }}>MOBIE</h1>
        |
        <a target='_blank' href='https://xbdrc.github.io/' title='Bruno Cruz'>
          <img src='bc_icon.ico' height={32} />
        </a>
        <a target='_blank' href='https://www.themoviedb.org/' title='The Movie Database'>
          <img src='tmdb.png' height={32} />
        </a>
        | 
        <Link to="/mobie">Popular</Link>
        <Link to="/mobie/upcoming">Upcoming</Link>
        <Link to="/mobie/toprated">Top Rated</Link>
      </nav>
      <Routes>
        <Route path='/mobie' element={<Popular />} />
        <Route path='/mobie/upcoming' element={<Upcoming />} />
        <Route path='/mobie/toprated' element={<TopRated />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App
