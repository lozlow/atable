var React = require('react')
var PropTypes = require('prop-types')
var classnames = require('classnames')

var omit = require('./lib/omit')

var Row = (function (superclass) {
  function Row () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Row.__proto__ = superclass;
  Row.prototype = Object.create( superclass && superclass.prototype );
  Row.prototype.constructor = Row;

  Row.prototype.getChildContext = function getChildContext () {
    var ref = this.props;
    var datum = ref.datum;

    return { datum: datum }
  };

  Row.prototype.render = function render () {
    var ref = this.props;
    var children = ref.children;
    var className = ref.className;
    var datum = ref.datum;
    var datumIndex = ref.datumIndex;
    var ref$1 = this.context;
    var rowClassName = ref$1.rowClassName;
    var cellType = ref$1.cellType;
    var options = ref$1.options;

    var childrenArr = [].concat(children)
    var mapChildren = function (key) { return function (child, idx) {
      if (Array.isArray(child)) { return child.map(mapChildren(idx)) }
      if (typeof child === 'function') {
        child = (cellType === 'th') ? child(options) : child(datum, datumIndex)
      }
      return child && React.cloneElement(child, { key: (key + ":" + (child.key || idx)) })
    }; }

    return (
      React.createElement( 'tr', Object.assign({}, { className: classnames(rowClassName, className) }, omit(this.props, ['children', 'className', 'datum', 'datumIndex', 'getKey'])),
        childrenArr.map(mapChildren(0))
      )
    )
  };

  return Row;
}(React.Component));

Row.contextTypes = {
  cellType: PropTypes.string,
  options: PropTypes.object,
  rowClassName: PropTypes.string
}

Row.childContextTypes = {
  datum: PropTypes.object
}

module.exports = Row
