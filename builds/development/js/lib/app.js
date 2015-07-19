//1 loop through the array that the .getElementByTagName returns
//BP -> var liItem=document.getElementsByTagName("li");

var liItem=document.getElementsByTagName("li");
for(var i=0;i<liItem.length;i++){
  console.log(typeof liItem[i]);
}
//2 use wild character to display the total number of the nods in a document
var totalNodeArray=document.getElementsByTagName("*");
console.log('2 node total number is '+totalNodeArray.length);

//3 combine getElementById and getElementByTagName to get the total number of nodes inside of a element whose id is 'purchase'
var purchaseNode=document.getElementById("purchase");
var nodesInPurchase=purchaseNode.getElementsByTagName("*");
console.log('3 node total number in #purchase is '+nodesInPurchase.length);
