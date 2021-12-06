
import React, {useState} from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";


function App() {

  const [currPage, setCurrPage] = useState(<Home/>) 

  return (
      <div class="flex flex-row bg-mg-teal h-screen">
        <Sidebar setPage={setCurrPage}/>

        {currPage}
    </div>
  );
}

export default App;
