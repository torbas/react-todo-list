var React = require('react');

module.exports = React.createClass({

  handleChange: function(){
    this.props.onCheck();
  },

  render: function(){
    var completeBool = this.props.completed;

    return (
      <input className="checkbox pull-right" 
      checked={completeBool} 
      type="checkbox" 
      name="complete"
      onChange={this.handleChange}/>
    )
  }
})