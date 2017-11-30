var React = require('react')
var PropTypes = require('prop-types')

var omit = require('./lib/omit')

var THead = (function (superclass) {
  function THead () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) THead.__proto__ = superclass;
  THead.prototype = Object.create( superclass && superclass.prototype );
  THead.prototype.constructor = THead;

  THead.prototype.getChildContext = function getChildContext () {
    return {
      cellType: 'th',
      options: {}
    }
  };

  THead.prototype.render = function render () {
    return (
      React.createElement( 'thead', omit(this.props, ['children']),
        this.props.children
      )
    )
  };

  return THead;
}(React.Component));

THead.childContextTypes = {
  cellType: PropTypes.string,
  options: PropTypes.object
}

module.exports = THead
