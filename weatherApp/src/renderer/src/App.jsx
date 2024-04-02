
import WeatherApp from './components/WeatherApp/WeatherApp'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className='App'>
      <WeatherApp></WeatherApp>
    </div>
  )
}

export default App

