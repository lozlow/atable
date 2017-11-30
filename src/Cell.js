const React = require('react')
const PropTypes = require('prop-types')
const classnames = require('classnames')

const omit = require('./lib/omit')

class Cell extends React.Component {
  render () {
    const { cellClassName, datum, cellType } = this.context
    const { children, className } = this.props

    const cellProps = {
      className: classnames(cellClassName, className),
      ...omit(this.props, ['children', 'className'])
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

module.exports = Cell
