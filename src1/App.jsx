import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { MainProvider } from './components/Context';
import Create from "./components/Create";
import Home from './components/Home';
import NotFount from "./components/NotFount";
import Read from "./components/Read";
import Delete from './components/Delete';
import Update from "./components/Update";

function App() {
  return (
    <MainProvider>
      <center>
        <div >
          <Router>
            <Switch >

              <Route exact path="/create"> <Create /> </Route>
              <Route exact path="/read/:id"> <Read /> </Route>
              <Route exact path="/update/:id"> <Update /> </Route>
              <Route exact path="/delete/:id"> <Delete /> </Route>


              <Route exact path="/"> <Home /> </Route>
              <Route path="*"> <NotFount /> </Route>



            </Switch>
          </Router>
        </div>
      </center>
    </MainProvider>
  );
}

export default App;
