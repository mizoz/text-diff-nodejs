#!/usr/bin/env node
/** Simple text diff */
const fs=require('fs');
const a=process.argv.slice(2);
if(a.length<2){console.log('Usage: text-diff.js <f1> <f2>');process.exit(1);}
if(!fs.existsSync(a[0])||!fs.existsSync(a[1])){console.log('Error: file not found');process.exit(1);}
const l1=fs.readFileSync(a[0],'utf-8').split('\n'),l2=fs.readFileSync(a[1],'utf-8').split('\n');
const m=Math.max(l1.length,l2.length);
for(let i=0;i<m;i++){
  if(l1[i]===l2[i])console.log(`  ${l1[i]||''}`);
  else if(l1[i]===undefined)console.log(`+ ${l2[i]}`);
  else if(l2[i]===undefined)console.log(`- ${l1[i]}`);
  else{console.log(`- ${l1[i]}`);console.log(`+ ${l2[i]}`);}
}
