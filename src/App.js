import React, {Component, Fragment} from 'react';
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavLink activeClassName={"active"} to={"/home"}>首页</NavLink>
        <NavLink activeClassName={"active"} to={"/movie"}>电影</NavLink>
        <NavLink activeClassName={"active"} to={"/about"}>关于</NavLink>
        <Switch>
          <Route path={"/home"} component={Home}/>
          <Route path={"/movie"} component={Movie}/>
          <Route path={"/about"} component={About}/>
          <Redirect to={"/home"}></Redirect>
        </Switch>
      </Fragment>
    );
  }

  componentDidMount() {
    /*fetch('/ke/js/data.json')
      .then(response => response.json())
      .then(data=>{
        console.log(data)
      })*/
  }
}

export default App;
