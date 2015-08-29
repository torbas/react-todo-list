var React = require('react');

module.exports = React.createClass({
  render: function(){

    var todos = this.props.todos;

    return (
      <ul>
        {todos.map(function(todo, index) {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    )
  }
})