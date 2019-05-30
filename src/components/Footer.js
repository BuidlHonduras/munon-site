import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="">
        <p class="float-right">
          <a href="#" className="primary">
            Back to top
          </a>
        </p>
        <p class="float-left">&copy; 2019 Hack Muñón</p>
      </footer>
    );
  }
}
