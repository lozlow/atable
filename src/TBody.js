const React = require('react')
const PropTypes = require('prop-types')

class TBody extends React.Component {
  getChildContext () {
    return { cellType: 'td' }
  }

  render () {
    const { data } = this.context
    const { className, children } = this.props
    const childComponents = [].concat(children)

    return (
      <tbody className={className}>
        {(data)
          ? data.map((datum, dataIdx) => childComponents.map((child, childIdx) => {
            const key = `${dataIdx}:${childIdx}`
            if (typeof child === 'function') child = child(datum, dataIdx)

            return child && React.cloneElement(child, { key, datum })
          }))
          : children
        }
      </tbody>
    )
  }
}

TBody.contextTypes = {
  data: PropTypes.array
}

TBody.childContextTypes = {
  cellType: PropTypes.string
}

TBody.__TBODY = true

module.exports = TBody
