import logo from './logo.svg';
import './App.css';
import Image from './img.jpg'
function App() {
  return (
    <div className="container" >
<div style={{border:'solid 1px black', maxWidth:'100vw'}}>

<h1 className='title red'>Your name here</h1>
<br>
</br>

<img src={Image} />
<br>
</br>

<img src={Image} />

</div>


    </div>
  );
}

export default App;
