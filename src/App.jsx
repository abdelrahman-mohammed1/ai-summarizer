import { ToastContainer } from 'react-toastify';

import Hero from './components/Hero';
import Demo from './components/Demo';
export default function App() {
  return (
    <main>
      <div className="main" >
        <div className="gradient" />
      </div>

      <div className='app' >
        <Hero />
        <Demo />
      </div>
      <ToastContainer />
    </main>
  )
}
