import * as Router from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router.BrowserRouter>
      <Layout>
        <Router.Switch>
          <Router.Route exact path={"/"} component={Games} />
          <Router.Route exact path={"/contact"} component={Contact} />
        </Router.Switch>
      </Layout>
    </Router.BrowserRouter>
  );
}

export default App;
