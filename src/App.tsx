import { VideoList } from "./Components/VideoList";
import { VideoPlayer } from "./Components/VideoPlayer";
import './App.css'

function App() {
  return (
    <div className="App">
      <header >
          <VideoList />
          <VideoPlayer />
      </header>
    </div>
  );
}

export default App;
