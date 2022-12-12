import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';
import './style.css'

function App() {

  const [explorerData, setExplorerData] = useState(explorer);


  return <div className="App">
    <Folder explorer={explorerData} />
  </div>
}

export default App;
