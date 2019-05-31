import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-4">
        <p className="float-right">
          <a href="#" className="primary">
            Back to top
          </a>
        </p>
        <p className="float-left">&copy; 2019 Hack Muñón</p>
      </footer>
    );
  }
}
