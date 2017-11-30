var React = require('react')
var PropTypes = require('prop-types')
var classnames = require('classnames')

var omit = require('./lib/omit')

var Cell = (function (superclass) {
  function Cell () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Cell.__proto__ = superclass;
  Cell.prototype = Object.create( superclass && superclass.prototype );
  Cell.prototype.constructor = Cell;

  Cell.prototype.render = function render () {
    var ref = this.context;
    var cellClassName = ref.cellClassName;
    var datum = ref.datum;
    var cellType = ref.cellType;
    var ref$1 = this.props;
    var children = ref$1.children;
    var className = ref$1.className;

    var cellProps = Object.assign({}, {className: classnames(cellClassName, className)},
      omit(this.props, ['children', 'className']))

    return React.createElement(
      cellType,
      cellProps,
      typeof children === 'function' ? children(datum) : children
    )
  };

  return Cell;
}(React.Component));

Cell.contextTypes = {
  cellClassName: PropTypes.string,
  cellType: PropTypes.string,
  datum: PropTypes.object
}

module.exports = Cell
