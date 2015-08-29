var React = require('react');

module.exports = React.createClass({
  render: function(){

    var children = this.props.children;

    return (
      <div className="row">
        {children}
      </div>
    )
  }
})