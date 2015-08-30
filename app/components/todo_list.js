var React = require('react');
var TodoItem = require('./todo_item');

module.exports = React.createClass({
  onChangeComplete: function(id){
    this.props.onChangeTaskCompletion(id);
  },

  handleDeleteClick: function(id){
    this.props.onDeleteTask(id);
  },

  handleEdit: function(id, value){
    this.props.onEdit(id, value);
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
                  changeCompleteState={this.onChangeComplete}
                  onDeleteClick={this.handleDeleteClick}
                  onTaskEdit={this.handleEdit}/>
        }.bind(this))}
      </ul>
    )
  }
})