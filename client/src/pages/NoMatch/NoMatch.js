import React from "react";

//Component to display error page when there are no defined page for incoming route
const NoMatch = () =>
  <div className="container-fluid">
        <div className = "jumbotron jumbotron-primary">
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </div>
  </div>;

export default NoMatch;
