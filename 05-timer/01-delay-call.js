#!/usr/bin/node

function Bomb(){
  this.message = 'Bomb';
}
Bomb.prototype.explore = function(){
  console.log(this.message);
};

var Bomb = new Bomb();

var timeID = setTimeout(bomb,explode,bind(bomb),2000);

clearTimeout(timeID);
