var React = require('react');
var TodoList = require('./todo_list');
var TextField = require('./text_field');
var AddButton = require('./button');
var Row = require('./row');
var Col = require('./col');

module.exports = React.createClass({
  
  getInitialState: function(){
    return {
      todos: ["Shop for parts", "Work on Portfolio", "Hang with Friends"],
      todoInput: ""
    }
  },

  handleTodoInput: function(value){
    this.setState({
      todoInput: value
    });
  },

  handleAddTodo: function(){
    this.setState({
      todos: this.state.todos.concat(this.state.todoInput)
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
            <AddButton text={"Add"} onButtonClick={this.handleAddTodo}/>
          </Col>
        </Row>
        <Row>
          <Col size={"12"}>
            <TodoList todos={todos} />
          </Col>
        </Row>
      </div>
    )
  }
})