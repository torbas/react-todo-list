var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="form-group">
        <input className="form-control" type="text" name="task" />
      </div>
    )
  }
})