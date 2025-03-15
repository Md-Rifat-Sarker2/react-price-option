
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
