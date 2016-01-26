var numbers = [2, 4, 6];
for (var index in numbers) {
  console.log(index, ":", numbers[index]);
}

numObj = {
num1: [2, 4, 6],
num2: [3, 5, 7]
};

for(var index in numObj) {
  console.log(index);
  console.log(numObj[index]);
}
