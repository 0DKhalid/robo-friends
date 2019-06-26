import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import RoboSearch from "../components/RoboSearch";
import Scroll from "../components/Scroll";
import ErrorBundary from "../components/ErrorBundary";
import { setSearchFields, fetchRobots } from "../action";

const mapStateToProps = state => ({
  searchFields: state.searchReducer.searchFields,
  robots: state.fetchRobotsReducer.robots,
  isPiending: state.fetchRobotsReducer.isPiending,
  error: state.fetchRobotsReducer.error
});

const mapDispatchToProps = dispatch => ({
  onSearchHandller: ({ target }) => dispatch(setSearchFields(target.value)),
  fetchRobots: () => dispatch(fetchRobots())
});

class App extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { searchFields, onSearchHandller, robots, isPiending } = this.props;
    const filterRoboSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFields.toLowerCase());
    });
    return isPiending ? (
      <h1 className="tc logo">Loding...</h1>
    ) : (
      <div className="tc">
        <h1 className="logo">Robo Friends</h1>
        <RoboSearch search={onSearchHandller} />
        <Scroll>
          <ErrorBundary>
            <CardList robots={filterRoboSearch} />
          </ErrorBundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
