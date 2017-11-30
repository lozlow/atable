# atable

it's a table

```
$ npm install atable
```

comes with no styling of it's own, it's completely up to you on how to render your Cells.

## why?

a very simple, declarative way of generating tables, define your table as if it was rendering just one row and pass an array of datums.

## usage

### simple

```js
const { Table, THead, Row, Cell, TBody } = require('atable')

module.exports = function Example () {
  return (
    <Table>
      <THead>
        <Row>
          <Cell>Hello</Cell>
          <Cell>Data</Cell>
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell>Something</Cell>
          <Cell>Else</Cell>
        </Row>
        <Row>
          <Cell>Another</Cell>
          <Cell>Row</Cell>
        </Row>
      </TBody>
    </Table>
  )
}
```

### with data array

```js
const { Table, THead, Row, Cell, TBody } = require('atable')

module.exports = function Example () {
  const data = [{a: 1, b: 2, c: 3}]

  return (
    <Table data={data} rowClassName='row' cellClassName='cell'>
      <THead>
        <Row>
          <Cell>Hello</Cell>
          <Cell colSpan={2}>Data</Cell>
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell>{(datum) => datum.a}</Cell>
          {(datum, rowIdx) => (<Cell>{datum.b} {rowIdx}</Cell>)}
          <Cell>{(datum) => datum.c}</Cell>
        </Row>
      </TBody>
    </Table>
  )
}
```

### possibly render multiple rows per datum

```js
const { Table, THead, Row, Cell, TBody } = require('atable')

module.exports = function Example () {
  const data = [{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}]

  return (
    <Table data={data} rowClassName='row' cellClassName='cell'>
      <THead>
        <Row>
          <Cell>Hello</Cell>
          <Cell colSpan={2}>Data</Cell>
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell>{(datum) => datum.a}</Cell>
          <Cell>{(datum) => datum.b}</Cell>
          <Cell>{(datum) => datum.c}</Cell>
        </Row>
        {(_, idx) => (idx % 2 === 0) && (
          <Row className='row--even'>
            <Cell>{(datum) => datum.a}</Cell>
            <Cell>{(datum) => datum.b}</Cell>
            <Cell>{(datum) => datum.c}</Cell>
          </Row>
        )}
      </TBody>
    </Table>
  )
}
```

### more advanced example with keys (recommended for efficient re-renders)

```js
const { Table, THead, Row, Cell, TBody } = require('atable')

module.exports = function Example () {
  const data = [{id: '309hj24g0ih2g3', a: 1, b: 2, c: 3}]

  return (
    <Table data={data} rowClassName='row' cellClassName='cell'>
      <THead>
        <Row>
          <Cell>Hello</Cell>
          <Cell colSpan={3}>Data</Cell>
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
