const React = require('react')
const PropTypes = require('prop-types')

const omit = require('./lib/omit')

class THead extends React.Component {
  getChildContext () {
    return {
      cellType: 'th',
      options: {}
    }
  }

  render () {
    return (
      <thead {...omit(this.props, ['children'])}>
        {this.props.children}
      </thead>
    )
  }
}

THead.childContextTypes = {
  cellType: PropTypes.string,
  options: PropTypes.object
}

module.exports = THead
