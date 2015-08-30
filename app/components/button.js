var React = require('react');

module.exports = React.createClass({

  handleClick: function(event){
    this.props.onButtonClick();
  },

  render: function(){
    var text = this.props.text;
    var classes = this.props.classes;

    return (
      <button className={classes} onClick={this.handleClick}>{text}</button>
    )
  }

})