
import './App.css';
import BasicTable from './userlist';
import{Switch,Route} from"react-router-dom"
import { Adduser } from './addusers';
import { Edituser } from './edituser';
import { useState } from 'react';
function App() {
  const initialdata=[{ 
    rollno:"01",
    name:"Aravind",
    emailid:"aravind@gmail.com",
    location:"Tirunelveli"
},

{ 
    rollno:"02",
    name:"Ajith",
    emailid:"ajith@gmail.com",
    location:"Tirunelveli"
},

{ 
    rollno:"03",
    name:"Adam",
    emailid:"adam@gmail.com",
    location:"Tirunelveli"
},
{ 
    rollno:"04",
    name:"Ash",
    emailid:"ash@gmail.com",
    location:"Tirunelveli"
}
]
const[finalData,setfinalData]=useState(initialdata)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BasicTable finalData={finalData} setfinalData={setfinalData}/>
        </Route>
        <Route exact path="/adduser">
          <Adduser finalData={finalData} setfinalData={setfinalData}/>
        </Route>
        <Route exact path="/edituser/:index">
          <Edituser finalData={finalData} setfinalData={setfinalData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
