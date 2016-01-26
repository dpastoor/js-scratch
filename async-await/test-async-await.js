/**
 * Created by devin on 1/26/16.
 */
let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('fs')); // adds Async() versions that return promises
let path = require('path');
let _ = require('lodash');
//
///** Returns the number of files in the given directory. */
let countFiles = async function(dir) {
  let files = await fs.readdirAsync(dir);
  let paths = _.map(files, (file) => path.join(dir, file));
  let stats = _.map(paths, (path) => fs.statAsync(path).then(res => res.isFile())); // parallel!
  //same as Promise.all
  let results = await* stats;
  return _.filter(results, (res) => res).length;
}
//
// Give it a spin
countFiles(__dirname)
  .then (function (num) { console.log('There are ' + num + ' files in ' + __dirname); })
  .catch(function (err) { console.log('Something went wrong: ' + err); });
