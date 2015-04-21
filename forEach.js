var sArray = ["hello", "there", "you"];
sArray.forEach(function anon(element, index,array) {
  console.log(index + ":" + element);
});

for (var i=0; i < sArray.length; i++) {
    console.log(i + ":" + sArray[i]);
}

var logArray = function(array) {
  for (var i=0; i < array.length; i++) {
      console.log("infun" + i + ":" + array[i]);
  }
};
logArray(sArray);

var objArray = {
  arr:["hello", "there", "you"],
  log: function() {
    for (var i=0; i < this.arr.length; i++) {
          console.log("in obj: " + i + ":" + this.arr[i]);
      }
  }
};

objArray.log();

var objArray2 = {
  arr:["hello", "there", "you"],
  log: function() {
    for (var i=0; i < this.arr.length; i++) {
          console.log("in obj: " + i + ":" + this.arr[i]);
      }
  }
};
