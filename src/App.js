import logo from './logo.svg';
import './App.css';
import imgInSrc from './imageInSrc.jpg'


function App() {
  return (
    <div className="App">
    
      <div>
      <h1 clsss="title blue" style={{color: 'red'}}> GOTHAM CITY</h1>
      <h2> Joker x Batman</h2>

        <img src={process.env.PUBLIC_URL + '/imageInPublic.jpg'} alt="" />
        <img src={imgInSrc} />
      </div>

      <video width="320" height= "240" controls>

      </video>
    </div>
  );
}

export default App;
