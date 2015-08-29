var React = require('react');

module.exports = React.createClass({
  render: function(){

    var children = this.props.children;
    var size = this.props.size;
    var colClass = "col-md-"+size

    return (
      <div className={colClass}>
        {children}
      </div>
    )
  }
})