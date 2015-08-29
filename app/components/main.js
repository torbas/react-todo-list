var React = require('react');
var TodoList = require('./todo_list');
var TextField = require('./text_field');
var AddButton = require('./button');
var Row = require('./row');
var Col = require('./col');

module.exports = React.createClass({
  handleAddTodo: function(){
    
  },

  render: function(){

    var name = this.props.name;
    var todos = ["shop", "work", "play"];
    return (
      <div className="container">
        <Row>
          <Col size={"12"}>
            <h1>{name+"'s"} Todo List</h1>
          </Col>
          <Col size={"11"}>
            <TextField />
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