# next-pick-value
> Pick value from items.

## install:
```bash
npm install -S afeiship/next-pick-value --registry=https://registry.npm.taobao.org
```

## usage:
```js
var kv = [
  {
    key: '1',
    value: '消场'
  },
  {
    key: '2',
    value: '删场'
  },
  {
    key: '3',
    value: '甩场'
  },
  {
    key: '4',
    value: '链场'
  },
  {
    key: '5',
    value: '未拍'
  },
  {
    key: '6',
    value: '已拍'
  }
];

var rs = nx.pickValue( kv, '3' );
// '甩场'
```
