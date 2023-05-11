import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("Error set");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { children, errorFallback = <div>Error Rendering Element</div> } =
      this.props;
    const { hasError } = this.state;
    if (hasError) {
      return errorFallback;
    }

    return children;
  }
}
