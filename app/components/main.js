var React = require('react');
var TodoList = require('./todo_list');
var TextField = require('./text_field');
var AddButton = require('./button');
var Row = require('./row');
var Col = require('./col');

module.exports = React.createClass({
  
  getInitialState: function(){
    return {
      todos: [
        {task: "Shop for parts", complete: false}, 
        {task: "Work on Portfolio", complete: false}, 
        {task: "Hang with Friends", complete:false}
      ],
      todoInput: ""
    }
  },

  handleTodoInput: function(value){
    this.setState({
      todoInput: value
    });
  },

  handleAddTodo: function(){
    var newTask = {
      task: this.state.todoInput,
      complete: false
    }
    this.setState({
      todos: this.state.todos.concat(newTask),
      todoInput: ""
    });
  },

  updateTaskCompletion: function(id){
    var tmpTodos = this.state.todos.map(function(todo, index) {
      if(index==id){
        todo.complete = !todo.complete;
      }
      return todo;
    });

    this.setState({
      todos: tmpTodos
    });

  },

  deleteTask: function(id){
    var tmpTodos = this.state.todos.filter(function(todo, index) {
      return index != id;
    });

    this.setState({
      todos: tmpTodos
    });
  },

  editTask: function(id, value){
    var tmpTodos = this.state.todos.map(function(todo, index) {
      if(index==id){
        todo.task = value;
      }
      return todo;
    });

    this.setState({
      todos: tmpTodos
    });
  },

  render: function(){

    var name = this.props.name;
    var todos = this.state.todos;

    return (
      <div className="container">
        <Row>
          <Col size={"12"}>
            <h1>{name+"'s"} Todo List</h1>
          </Col>
          <Col size={"11"}>
            <TextField value={this.state.todoInput} onTextChange={this.handleTodoInput}/>
          </Col>
          <Col size={"1"}>
            <AddButton text={"Add"} classes={"btn btn-primary"} onButtonClick={this.handleAddTodo}/>
          </Col>
        </Row>
        <Row>
          <Col size={"12"}>
            <TodoList todos={todos} 
              onChangeTaskCompletion={this.updateTaskCompletion} 
              onDeleteTask={this.deleteTask}
              onEdit={this.editTask} />
          </Col>
        </Row>
      </div>
    )
  }
})