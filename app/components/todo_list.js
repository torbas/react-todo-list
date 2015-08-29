var React = require('react');

module.exports = React.createClass({
  render: function(){

    var todos = this.props.todos;

    return (
      <ul>
        {todos.map(function(todo) {
          return <li>{todo}</li>;
        })}
      </ul>
    )
  }
})