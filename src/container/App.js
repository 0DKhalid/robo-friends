import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import RoboSearch from "../components/RoboSearch";
import Scroll from "../components/Scroll";
import ErrorBundary from "../components/ErrorBundary";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFildes: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data => this.setState({ robots: data }))
      .catch(err => console.log(err));
  }

  onSearchHandller = ({ target }) => {
    this.setState({ searchFildes: target.value });
  };

  render() {
    const { robots, searchFildes } = this.state;
    const filterRoboSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFildes.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc logo">Loding...</h1>
    ) : (
      <div className="tc">
        <h1 className="logo">Robo Friends</h1>
        <RoboSearch search={this.onSearchHandller} />
        <Scroll>
          <ErrorBundary>
            <CardList robots={filterRoboSearch} />
          </ErrorBundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
