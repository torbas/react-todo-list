var React = require('react');
var TodoList = require('./todo_list');
var TextField = require('./text_field');
var AddButton = require('./button');
var Row = require('./row');

module.exports = React.createClass({
  render: function(){

    var name = this.props.name;
    var todos = ["shop", "work", "play"];
    return (
      <div className="container">
        <Row>
          <h1>{name+"'s"} Todo List</h1>
          <TextField /><AddButton text={"Add"}/>
        </Row>
        <TodoList todos={todos} />
      </div>
    )
  }
})