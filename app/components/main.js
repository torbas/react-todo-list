var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <ul>
        <li>shop</li>
        <li>play</li>
        <li>work</li>
      </ul>
    )

    // React.createElement('ul',{},[
    //   React.createElement('li', {}, 'shop'),
    //   React.createElement('li', {}, 'play'),
    //   React.createElement('li', {}, 'work'),
    // ]);
  }
})