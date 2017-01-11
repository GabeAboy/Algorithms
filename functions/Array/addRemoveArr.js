function removeItem(myGroceryList,item) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if(myGroceryList[i]===item)myGroceryList.splice(i,1);}
  return myGroceryList;}

function addItem(myGroceryList,add) {
  var flag = false;
  for (var i = 0; i < myGroceryList.length; i++) {
    if(myGroceryList[i]===add){
      flag = true;
      break;
    }
  }
  if(flag===false)myGroceryList.push(add);
  return myGroceryList;
}
console.log(addItem([1,2,3,4,5],1));
