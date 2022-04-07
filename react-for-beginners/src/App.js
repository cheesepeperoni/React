import Home from "./components/Nomad/Home";
import Detail from "./components/Nomad/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Switch>

        <Route path="/movie/:id">
          <Detail/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>  

      </Switch>
    </Router>
    </div>
  );
}

export default App;
