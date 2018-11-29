(function () {

  var global = global || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.pickValue = function (inArray, inValue) {
    var current = null;
    nx.each(inArray, function (_, item) {
      if (item.key === inValue) {
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
