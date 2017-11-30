# atable

it's a table

```
$ npm install lozlow/atable
```

comes with no styling of it's own, it's completely up to you on how to render your Cells.

## usage

```js
const { Table, THead, Row, Cell, TBody } = require('atable')

module.exports = function Example () {
  return (
    <Table data={[{id: '309hj24g0ih2g3', a: 1, b: 2, c: 3}]} rowClassName='row' cellClassName='cell'>
      <THead>
        <Row>
          {(options) => (<Cell>Hello {options.hasActiveSort && options.sortDirection}</Cell>)}
          <Cell colspan={3}>Data</Cell>
        </Row>
      </THead>
      <TBody>
        {(datum, idx) => (
          <Row getKey={(datum) => datum.id}>
            <Cell>{(datum) => datum.a}</Cell>
            {(datum) => (<Cell>{idx}</Cell>)}
            {(datum, idx) => (<Cell>{datum.b} {idx}</Cell>)}
            <Cell>{(datum) => datum.c}</Cell>
          </Row>
        )}
      </TBody>
    </Table>
  )
}
```
