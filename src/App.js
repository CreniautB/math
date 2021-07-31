import logo from './logo.svg';
import Level from './component/level/level';
import HomePage from './component/homePage/homePage';
import './component/homePage/homePage.css'


function App() {



  return (
    <div className="homePage">
      <img src="img/logo.png" alt='logo' width='120'></img>
      <HomePage />

    </div>
  );
}

export default App;
