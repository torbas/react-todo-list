var React = require('react');
var TodoItem = require('./todo_item');

module.exports = React.createClass({
  onChangeComplete: function(id){
    this.props.onChangeTaskCompletion(id);
  },

  render: function(){

    var todos = this.props.todos;

    return (
      <ul className="list-group">
        {todos.map(function(todo, index) {
          return <TodoItem 
                  todo={todo} 
                  key={index} 
                  id= {index}
                  changeCompleteState={this.onChangeComplete}/>
        }.bind(this))}
      </ul>
    )
  }
})