const React = require('react')
const PropTypes = require('prop-types')

class Table extends React.Component {
  getChildContext () {
    const { rowClassName, cellClassName, data } = this.props

    return { rowClassName, cellClassName, data }
  }

  render () {
    const { className } = this.props
    return (
      <table className={className}>
        {this.props.children}
      </table>
    )
  }
}

Table.defaultProps = {
  className: 'ATable',
  rowClassName: 'ARow',
  cellClassName: 'ACell'
}

Table.childContextTypes = {
  rowClassName: PropTypes.string,
  cellClassName: PropTypes.string,
  data: PropTypes.array
}

module.exports = Table
