var React = require('react');

module.exports = React.createClass({

  handleClick: function(event){
    console.log('click');
  },

  render: function(){
    var text = this.props.text;

    return (
      <button className="btn btn-primary" onClick={this.handleClick}>{text}</button>
    )
  }

})