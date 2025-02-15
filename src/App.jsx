import { HashRouter } from 'react-router-dom'
import { About, Hero, LoadingScreen, Navbar, Works, Conclusion } from './Components'


const App = () => {

  return (
    <HashRouter>
      <div className=' relative z-0 bg-gradient-to-b from-[#052222] to-black overflow-x-clip '>

        <div className=' bg-gradient-to-b from-[#2c4c82]'>
          {/* progress 70% >>*/}
          <Navbar />

          {/* progress 100% >> */}
          <Hero />

        </div>
        {/* progress 100% >> */}
        <About />


        {/* progress 85% >> */}
        <Works />

        {/* Progress 50% >> */}
        <Conclusion/>
      </div>

      {/* progress 99% >> */}
      <LoadingScreen /> 
    </HashRouter>
  )
}

export default App
