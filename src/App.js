import logo from './logo.svg';
import './App.css';

import src from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
    
      <div>
      <h1 clsss="title blue">bruce WAYNE</h1>

        <img src={process.env.PUBLIC_URL + '/imageInPublic.jpg'} alt="" />
      </div>

      <video width="320" height= "240" controls>

      </video>
    </div>
  );
}

export default App;
