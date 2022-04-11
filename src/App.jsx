import Landing from './pages/Landing'
import About from './pages/About'
import Portafolio from './pages/Portafolio'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/portafolio' element={<Portafolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
