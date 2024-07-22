import logo from './logo.svg';
import './App.css';
import LoginC from './Component/LoginC';
import LoginContext from './Context/LoginContext';
import FormClassC from './Component/FormClassC';
import FormFuncC from './Component/FormFunC';
import LoginCRef from './Component/LoginCRef';
import PageTitleFirst from './Component/PageTitleFirst';
import PageTitleEvery from './Component/PageTitleEvery';
import TitlePageOnChange from './Component/TitlePageOnChange';

function App() {
  return (
    <div className="App">
      <LoginC/>
      <LoginContext />
      <FormClassC/> 
      <FormFuncC/>
      <LoginCRef/>
      <PageTitleFirst/>
      <PageTitleEvery/>
      <TitlePageOnChange/>
    </div>
  );
}

export default App;
