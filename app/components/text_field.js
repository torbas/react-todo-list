var React = require('react');

module.exports = React.createClass({

  handleChange: function(event){
    this.props.onTextChange(event.target.value);
  },

  render: function(){
    return (
      <div className="form-group">
        <input className="form-control" type="text" name="task" 
          value={this.props.value} 
          onChange={this.handleChange}/>
      </div>
    )
  }
})