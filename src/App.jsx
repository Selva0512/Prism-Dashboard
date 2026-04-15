import './App.css'
// import ChatBot from './components/ChatBot'
import PrismDateTime from './components/PrismDateTime'
import VideoGrid from './components/VideoGrid'

function App() {

  return (
    <>
      <PrismDateTime/>
      <div className='grid grid-cols-1fr 320px gap-2 p-4'> 
        <VideoGrid/>
      </div>
      {/* <ChatBot/> */}
      {/* <PrismInspection/> */}
    </>
  )
}

export default App
