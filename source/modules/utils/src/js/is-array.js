module.exports =  function(obj) {
  return Array.isArray?Array.isArray(obj):(Object.prototype.toString.call(obj) === '[object Array]');
};
