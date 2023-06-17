import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import News from './pages/News'
import Dresses from './pages/Dresses'
import Up from './pages/Up'
import Down from './pages/Down'
import Coats from './pages/Coats'
import SmallItems from './pages/SmallItems'
import Suits from './pages/Suits'
import BoorivaGirls from './pages/BoorivaGirls'
import ErrorPage from './pages/ErrorPage'
import HomeCrushes from './pages/homeCrushes/index.jsx'

function App() {
    return(
        <Router>
            < Navbar/>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/News' element={<News />} />
                <Route path='/Dresses' element={<Dresses />} />
                <Route path='/Up' element={<Up />} />
                <Route path='/Down' element={<Down />} />
                <Route path='/Coats' element={<Coats />} />
                <Route path='/SmallItems' element={<SmallItems />} />
                <Route path='/Suits' element={<Suits />} />
                <Route path='/BoorivaGirls' element={<BoorivaGirls />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <HomeCrushes />
            <Footer />
        </Router>
        
    )
}

export default App