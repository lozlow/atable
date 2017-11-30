var React = require('react')
var PropTypes = require('prop-types')
var classnames = require('classnames')

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
    var ref$1 = this.context;
    var rowClassName = ref$1.rowClassName;
    var cellType = ref$1.cellType;
    var options = ref$1.options;

    var childrenArr = [].concat(children)

    return (
      React.createElement( 'tr', { className: classnames(rowClassName, className) },
        childrenArr.map(function (child, idx) {
          if (typeof child === 'function') {
            child = (cellType === 'th') ? child(options) : child(datum)
          }
          return child && React.cloneElement(child, { key: idx })
        })
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
