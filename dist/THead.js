var React = require('react')
var PropTypes = require('prop-types')

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
      options: {
        hasActiveSort: true,
        sortable: false,
        sortDirection: 'asc'
      }
    }
  };

  THead.prototype.render = function render () {
    return (
      React.createElement( 'thead', null,
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

THead.__THEAD = true

module.exports = THead
