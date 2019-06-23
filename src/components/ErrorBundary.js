import React, { Component } from "react";

class ErrorBundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ""
    };
  }

  componentDidCatch(error, info) {
    // console.log("///", error, info);
    this.setState({ hasError: true, error: error });
  }

  render() {
    const { hasError, error } = this.state;
    return hasError ? (
      <p className="tc bg--red f5">{error}</p>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBundary;
