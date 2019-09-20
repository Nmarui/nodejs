#!/usr/bin/node

const log = console.log,
      err = console.error,
      arg = console.argv[2];

if(typeof(arg)==='undifined'|| isNaN(Number(arg))){
  err('命令行参数不正确！');
  process.exit(1);
}
else{
  log('退出吗：'，arg);
  process.exit(arg);
}
