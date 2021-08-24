let maxcount = 10;
let count =1;
let ArrayofNum = [];
while (count <=maxcount)
{
  let number = (Math.floor(Math.random()*900)+99);
  ArrayofNum.push(number);
  console.log(ArrayofNum);
  count++;
}


ArrayofNum.sort();
console.log("The second largest element is =" +  ArrayofNum[1]);
console.log("The second smallest element is =" + ArrayofNum[8]);
