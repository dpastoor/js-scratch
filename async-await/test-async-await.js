/**
 * Created by devin on 1/26/16.
 */
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs')); // adds Async() versions that return promises
var path = require('path');
var _ = require('lodash');
//
///** Returns the number of files in the given directory. */
var countFiles = async function(dir) {
  var files = await fs.readdirAsync(dir);
  console.log(files);
  var paths = _.map(files, (file) => path.join(dir, file));
  console.log(paths);
  var stats = _.map(paths, (path) => fs.statAsync(path).then(res => res.isFile())); // parallel!
  let results = await* stats;
  return _.filter(results, (res) => res).length;
}
//
// Give it a spin
countFiles(__dirname)
  .then (function (num) { console.log('There are ' + num + ' files in ' + __dirname); })
  .catch(function (err) { console.log('Something went wrong: ' + err); });
