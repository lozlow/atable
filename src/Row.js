const React = require('react')
const PropTypes = require('prop-types')
const classnames = require('classnames')

const omit = require('./lib/omit')

class Row extends React.Component {
  getChildContext () {
    const { datum } = this.props

    return { datum }
  }

  render () {
    const { children, className, datum, datumIndex } = this.props
    const { rowClassName, cellType, options } = this.context

    const childrenArr = [].concat(children)

    return (
      <tr className={classnames(rowClassName, className)} {...omit(this.props, ['children', 'className', 'datum', 'datumIndex', 'getKey'])}>
        {childrenArr.map((child, idx) => {
          if (typeof child === 'function') {
            child = (cellType === 'th') ? child(options) : child(datum, datumIndex)
          }
          return child && React.cloneElement(child, { key: child.key || idx })
        })}
      </tr>
    )
  }
}

Row.contextTypes = {
  cellType: PropTypes.string,
  options: PropTypes.object,
  rowClassName: PropTypes.string
}

Row.childContextTypes = {
  datum: PropTypes.object
}

module.exports = Row
