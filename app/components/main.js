var React = require('react');
var TodoList = require('./todo_list');
var TextField = require('./text_field');
var SubmitButton = require('./button');

module.exports = React.createClass({
  render: function(){

    var name = this.props.name;
    var todos = ["shop", "work", "play"];
    return (
      <div>
        <TextField /><SubmitButton />
        <h1>{name+"'s"} Todo List</h1>
        <TodoList todo={todos} />
      </div>
    )

    // React.createElement('ul',{},[
    //   React.createElement('li', {}, 'shop'),
    //   React.createElement('li', {}, 'play'),
    //   React.createElement('li', {}, 'work'),
    // ]);
  }
})