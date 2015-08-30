var React = require('react');
var Checkbox = require('./checkbox');
var DeleteButton = require('./button');

module.exports = React.createClass({

  handleOnCheck: function(){
    this.props.changeCompleteState(this.props.id);
  },

  handleDeleteClick: function(){
    console.log("clicked");
  },

  render: function(){

    var todo_item = this.props.todo.task;
    var completeState = this.props.todo.complete;
    var todo_key = this.props.key;

    return (
      <li className="list-group-item" 
        key={todo_key} >

        {todo_item} 

        <Checkbox completed={completeState} onCheck={this.handleOnCheck}/>
        <DeleteButton classes={"btn btn-danger"} onClick={handleDeleteClick} />
      </li>
    )
  }
})