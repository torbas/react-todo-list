var React = require('react');

module.exports = React.createClass({
  render: function(){

    var name = this.props.name

    return (
      <div>
        <h1>{name+"'s"} Todo List</h1>
        <ul>
          <li>shop</li>
          <li>play</li>
          <li>work</li>
        </ul>
      </div>
    )

    // React.createElement('ul',{},[
    //   React.createElement('li', {}, 'shop'),
    //   React.createElement('li', {}, 'play'),
    //   React.createElement('li', {}, 'work'),
    // ]);
  }
})