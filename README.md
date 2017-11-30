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
    <Table data={[{a: 1, b: 2, c: 3}]} rowClassName='row' cellClassName='cell'>
      <THead>
        <Row>
          {(options) => (<Cell>Hello</Cell>)}
          <Cell colSpan={2}>Data</Cell>
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell>{(datum) => datum.a}</Cell>
          {(datum) => (<Cell>{datum.b}</Cell>)}
          <Cell>{(datum) => datum.c}</Cell>
        </Row>
      </TBody>
    </Table>
  )
}
```
