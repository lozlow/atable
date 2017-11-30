var React = require('react')
var PropTypes = require('prop-types')

var TBody = (function (superclass) {
  function TBody () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) TBody.__proto__ = superclass;
  TBody.prototype = Object.create( superclass && superclass.prototype );
  TBody.prototype.constructor = TBody;

  TBody.prototype.getChildContext = function getChildContext () {
    return { cellType: 'td' }
  };

  TBody.prototype.render = function render () {
    var ref = this.context;
    var data = ref.data;
    var ref$1 = this.props;
    var className = ref$1.className;
    var children = ref$1.children;
    var childComponents = [].concat(children)

    return (
      React.createElement( 'tbody', { className: className },
        (data)
          ? data.map(function (datum, dataIdx) { return childComponents.map(function (child, childIdx) {
            if (typeof child === 'function') { child = child(datum, dataIdx) }
            var rowKey = (child.props.getKey) ? child.props.getKey(datum) : dataIdx
            var key = rowKey + ":" + childIdx

            return child && React.cloneElement(child, { key: key, datum: datum, datumIndex: dataIdx })
          }); })
          : children
      )
    )
  };

  return TBody;
}(React.Component));

TBody.contextTypes = {
  data: PropTypes.array
}

TBody.childContextTypes = {
  cellType: PropTypes.string
}

TBody.__TBODY = true

module.exports = TBody
