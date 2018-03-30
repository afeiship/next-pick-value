(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var NONE = 'NONE';

  nx.pickValue = function (inList, inValue) {
    var current = null;
    nx.each( inList, function(_, item ){
      if( item.key === inValue ){
        current = item;
        return nx.BREAKER;
      }
    });
    return current ? current.value : NONE;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pickValue;
  }

}());
