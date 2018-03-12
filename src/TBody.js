const React = require('react')
const PropTypes = require('prop-types')

const omit = require('./lib/omit')

function mapChild (child, { childIdx, datum, dataIdx }) {
  const rowKey = (child.props.getKey) ? child.props.getKey(datum) : dataIdx
  const key = `${rowKey}:${childIdx}`

  return React.cloneElement(child, { key, datum, datumIndex: dataIdx })
}

class TBody extends React.Component {
  getChildContext () {
    return { cellType: 'td' }
  }

  render () {
    const { data } = this.context
    const { children } = this.props
    const childComponents = [].concat(children)

    return (
      <tbody {...omit(this.props, ['children'])}>
        {(data)
          ? data.map((datum, dataIdx) => childComponents.map((child, childIdx) => {
            if (typeof child === 'function') child = child(datum, dataIdx)
            if (!child) return
            if (Array.isArray(child)) {
              return child.map((child, indx) => mapChild(child, { childIdx: `${childIdx}:${indx}`, datum, dataIdx }))
            }
            return mapChild(child, { childIdx, datum, dataIdx })
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

module.exports = TBody
