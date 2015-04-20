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
