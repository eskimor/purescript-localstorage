"use strict";

// module Browser.LocalStorage.Raw
// Based on: https://github.com/joneshf/purescript-webstorage/blob/master/src/Browser/WebStorage.js

exports.jsLocalStorage = window.localStorage;
exports.jsSessionStorage = window.sessionStorage;
exports.jsMkMockStorage = function(){
  return {
    length: function(){
      return Object.keys(this).length;
    },
    key: function(num){
      return Object.keys(this)[num];
    },
    getItem: function(str){
      return this[str];
    },
    setItem: function(str,val){
      this[str] = val;
    },
    removeItem: function(str){
      delete this[str];
    },
    clear: function(){
      Object.keys(this).forEach(this.removeItem, this);
    }
  };
};

exports.jsUnsafeLength = function(storage) {
  return function(){
    return storage.length;
  }
};

exports.jsUnsafeKey = function(storage,num) {
  return function(){
    return storage.key(num);
  }
};

exports.jsUnsafeGetItem = function(storage,str) {
  return function(){
    return storage.getItem(str);
  }
};

exports.jsUnsafeSetItem = function(storage,str,val) {
  return function(){
    storage.setItem(str, val);
    return {};
  }
};

exports.jsUnsafeRemoveItem = function(storage,str) {
  return function(){
    storage.removeItem(str);
    return {};
  }
};

exports.jsUnsafeClear = function(storage) {
  return function(){
    storage.clear();
    return {};
  }
};
