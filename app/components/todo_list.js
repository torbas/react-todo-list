var React = require('react');

module.exports = React.createClass({
  render: function(){

    var todos = this.props.todos;

    return (
      <ul className="list-group">
        {todos.map(function(todo, index) {
          return <li className="list-group-item" key={index}>{todo}</li>;
        })}
      </ul>
    )
  }
})