const React = require('react')
const PropTypes = require('prop-types')

class THead extends React.Component {
  getChildContext () {
    return {
      cellType: 'th',
      options: {
        hasActiveSort: true,
        sortable: false,
        sortDirection: 'asc'
      }
    }
  }

  render () {
    return (
      <thead>
        {this.props.children}
      </thead>
    )
  }
}

THead.childContextTypes = {
  cellType: PropTypes.string,
  options: PropTypes.object
}

THead.__THEAD = true

module.exports = THead
