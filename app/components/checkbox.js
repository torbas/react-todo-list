var React = require('react');

module.exports = React.createClass({

  handleChange: function(){
    this.props.onCheck();
  },

  render: function(){
    var completeBool = this.props.completed;
    return (
      <input className="form-control" 
      checked={completeBool} 
      type="checkbox" 
      name="complete" 
      onChange={this.handleChange}/>
    )
  }
})