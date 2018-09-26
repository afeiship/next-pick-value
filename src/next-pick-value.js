(function () {

  var global = global || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.pickValue = function (inList, inValue) {
    var current = null;
    nx.each( inList, function(_, item ){
      if( item.key === inValue ){
        current = item;
        return nx.BREAKER;
      }
    });
    return current ? current.value : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pickValue;
  }

}());
