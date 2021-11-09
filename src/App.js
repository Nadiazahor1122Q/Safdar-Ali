import logo from './logo.svg';
import './App.css';
import Image from './Components/Header/image';
import Header from './Components/Header/Header';
import Border from './Components/Border/Border';
import Accountint from './Components/Accountant/Accountant';
import Manger from './Components/Manager/Manger';
import Qualification from './Components/Qualification/Qualification';

function App() {
  return (
    <div className="App">
      <Image/>
     <Header/>
     <Border/>
     <Accountint/>
     <Manger/>
     <Qualification/>

    </div>
  );
}

export default App;
