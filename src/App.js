// import logo from './logo.svg';

import Bottom from "./Component/Bottom";
import Ending from "./Component/Ending";
import  Mainpage  from "./Component/Mainpage";
import Navbar from "./Component/Navbar";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Mainpage/>
      <Ending/>
      <Bottom/>
    </div>
  );
}

export default App;
