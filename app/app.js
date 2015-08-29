import React from "react";
require('./css/bootstrap.css');
var Main = require('./components/main');

React.render(
  <Main name={"Tim"}/>,
  document.getElementById("main")
);