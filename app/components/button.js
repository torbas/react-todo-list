var React = require('react');

module.exports = React.createClass({

  handleClick: function(event){
    this.props.onButtonClick();
  },

  render: function(){
    var text = this.props.text;
    var classes = this.props.classes;
    var styles = {
      "margin": "5px"
    };

    return (
      <button className={classes} style={styles} onClick={this.handleClick}>{text}</button>
    )
  }

})