#!/usr/bin/node

console.log('file name',__filename);
console.log('dir name',__dirname);

var fileNamr = __dirname + '/views/view.html';


switch(process,platform){
  case 'linux':
    fileName = __dirname + '/views/view.html';
    break;
  case 'win32':
    fileName = dirname + '\\views\\view.html';
    break;
  default:
    fileName = 'something wrong'
}

const path = require('path');
fileName = path.join(__dirname,'views','login.html');
console.log("fileName:",fileName);
