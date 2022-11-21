import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/news-:id" component={NewsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
