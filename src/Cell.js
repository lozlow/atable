const React = require('react')
const PropTypes = require('prop-types')
const classnames = require('classnames')

class Cell extends React.Component {
  render () {
    const { cellClassName, datum, cellType } = this.context
    const { children, className, colSpan, onClick } = this.props

    const cellProps = {
      className: classnames(cellClassName, className),
      colSpan,
      onClick
    }

    return React.createElement(
      cellType,
      cellProps,
      typeof children === 'function' ? children(datum) : children
    )
  }
}

Cell.contextTypes = {
  cellClassName: PropTypes.string,
  cellType: PropTypes.string,
  datum: PropTypes.object
}

Cell.__CELL = true

module.exports = Cell
