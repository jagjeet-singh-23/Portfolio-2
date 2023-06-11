import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Hero, StarsCanvas, Navbar, Tech, Works} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-primary z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App