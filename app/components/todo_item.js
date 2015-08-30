var React = require('react');
var Checkbox = require('./checkbox');
var Button = require('./button');
var TextField = require('./text_field');

module.exports = React.createClass({

  getInitialState: function(){
    return{
      edit: false,
      todoInput: this.props.todo.task
    }
  },
  handleOnCheck: function(){
    this.props.changeCompleteState(this.props.id);
  },
  handleTodoInput: function(value){
    this.setState({
      todoInput: value
    })
  },
  handleDeleteClick: function(){
    this.props.onDeleteClick(this.props.id);
  },
  handleEdit: function(){
    this.setState({
      edit: true
    })
  },
  handleEditSave: function(){ 
    this.setState({
      edit: false
    }, function(){
      this.props.onTaskEdit(this.props.id, this.state.todoInput);
    })
  },
  render: function(){

    var todo_item;
    var completeState = this.props.todo.complete;
    var todo_key = this.props.key;

    if(this.state.edit){
      todo_item = (
        <div>
          <TextField value={this.state.todoInput} onTextChange={this.handleTodoInput}/>
          <Button classes={"btn btn-success"} text={"Save"} onButtonClick={this.handleEditSave} />
        </div>
      )
    } else {
       todo_item= this.props.todo.task;
    }

    return (
      <li 
      className="list-group-item" 
      key={todo_key}>

        {todo_item} 

        <Checkbox completed={completeState} onCheck={this.handleOnCheck}/>
        <Button classes={"btn btn-info"} text={"Edit"} onButtonClick={this.handleEdit} />
        <Button classes={"btn btn-danger"} text={"Delete"} onButtonClick={this.handleDeleteClick} />
      </li>
    )
  }
})