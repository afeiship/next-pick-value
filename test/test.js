var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pick-value');

describe('next/pickValue', function () {

  it('nx.pickValue', function () {
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

    assert.equal(rs, '甩场');




  });

});
