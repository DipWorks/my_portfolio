import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Navbar from "./components/Navbar"; 

function App() {
  const [contactMe, setContactMe] = useState(false);

  return (
    <BrowserRouter>
      <Navbar conatactMe={contactMe} setContactMe={setContactMe} />
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              contactMe={contactMe}
              setContactMe={setContactMe}
            />
          )}
          exact
        />
        <Route path="/about" component={About} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/post" component={Post} />
        <Route path="/project" component={Project} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
