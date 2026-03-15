import './App.css'
import PrismDateTime from './components/PrismDateTime'
import VideoGrid from './components/VideoGrid'

function App() {

  return (
    <>
      <PrismDateTime/>
      <div className='grid grid-cols-1fr 320px gap-2 p-4'> 
        <VideoGrid/>
      </div>
      {/* <PrismInspection/> */}
    </>
  )
}

export default App
