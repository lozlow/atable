const React = require('react')
const PropTypes = require('prop-types')
const classnames = require('classnames')

class Row extends React.Component {
  getChildContext () {
    const { datum } = this.props

    return { datum }
  }

  render () {
    const { children, className, datum, rowSpan, onClick, datumIndex } = this.props
    const { rowClassName, cellType, options } = this.context

    const rowProps = { rowSpan, onClick }
    const childrenArr = [].concat(children)

    return (
      <tr className={classnames(rowClassName, className)} {...rowProps}>
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
