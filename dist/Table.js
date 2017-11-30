var React = require('react')
var PropTypes = require('prop-types')

var omit = require('./lib/omit')

var Table = (function (superclass) {
  function Table () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Table.__proto__ = superclass;
  Table.prototype = Object.create( superclass && superclass.prototype );
  Table.prototype.constructor = Table;

  Table.prototype.getChildContext = function getChildContext () {
    var ref = this.props;
    var rowClassName = ref.rowClassName;
    var cellClassName = ref.cellClassName;
    var data = ref.data;

    return { rowClassName: rowClassName, cellClassName: cellClassName, data: data }
  };

  Table.prototype.render = function render () {
    return (
      React.createElement( 'table', omit(this.props, ['children', 'data', 'rowClassName', 'cellClassName']),
        this.props.children
      )
    )
  };

  return Table;
}(React.Component));

Table.childContextTypes = {
  rowClassName: PropTypes.string,
  cellClassName: PropTypes.string,
  data: PropTypes.array
}

module.exports = Table
