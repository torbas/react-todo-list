var React = require('react');

module.exports = React.createClass({

  render: function(){
    var text = this.props.text;

    return (
      <button>{text}</button>
    )
  }

})