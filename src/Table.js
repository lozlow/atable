const React = require('react')
const PropTypes = require('prop-types')

const omit = require('./lib/omit')

class Table extends React.Component {
  getChildContext () {
    const { rowClassName, cellClassName, data } = this.props

    return { rowClassName, cellClassName, data }
  }

  render () {
    return (
      <table {...omit(this.props, ['children', 'data', 'rowClassName', 'cellClassName'])}>
        {this.props.children}
      </table>
    )
  }
}

Table.childContextTypes = {
  rowClassName: PropTypes.string,
  cellClassName: PropTypes.string,
  data: PropTypes.array
}

module.exports = Table
