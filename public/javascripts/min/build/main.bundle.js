!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){var n=function(){function e(e){this.greeting=e}return e.prototype.greet=function(){return"<h1 class='slds-text-heading--medium'>"+this.greeting+"</h1>"},e}(),r=new n("Hello, world!");document.getElementById("hello").innerHTML=r.greet()}]);