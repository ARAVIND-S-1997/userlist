
import './App.css';
import BasicTable from './userlist';
import{Switch,Route} from"react-router-dom"
import { Adduser } from './addusers';
// import { UsersDetails } from './userlist';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BasicTable  />
        </Route>
        <Route exact path="/adduser">
          <Adduser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
