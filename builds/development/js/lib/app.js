//0 get elements
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

//4 combine getElementById and getElementByClassName to get the total number of nodes whose class is "sale" and inside #purchase
var nodesClassInPurchases=purchaseNode.getElementsByClassName("sale");
console.log("4 node total number whose class is sale and in #purchase is "+nodesClassInPurchases.length);

//5 how to implement getElementByClassName for some old browsers that do not support getElementByClassName? We have to do that ourselves
function customGetElementByClassName(node, classname){
  if(node.getElementsByClassName){
    return node.getElementsByClassName(classname);
  }else{
    var results=new Array();
    var elems=node.getElementsByTagName("*");//nodes collection
    for(var i=0;i<elems.length;i++){
      if(elems[i].className.indexOf(classname)!= -1){
        results[results.length]=elems[i];
      }
    }
  }
}

var nodesClassInPurchases_5=customGetElementByClassName(purchaseNode,"sale");
console.log("5 node total number whose class is sale and in #purchase is "+nodesClassInPurchases.length+" using our custome method");
//5 node total number whose class is sale and in #purchase is 2 using our custome method


//0 get and set attributes
//we use getElementById, getElementByTagName, and getElementByClassName to get the element, in addition, we use getAttribute to get the element's attribute and use setAttribute to set the value of attribute

//6 object.getAttribute(attribute)
//invoked by element node, for example, combined with getElementByTagName to get the title attribute in each p element tag
var paras_6=document.getElementsByTagName("p");
for(var i=0;i<paras_6.length;i++){
  var title_text_6=paras_6[i].getAttribute("title");
  if(title_text_6){
  //only console log the title that is not null
    console.log("6 "+title_text_6);
  }
}
//6 p-title-1
//6 p-title-2
//6 p-title-3

//7 object.setAttribute( attribute,value )
//like getAttribute(), this method is only invoked by element node
//set the attribute of title in the element whose id is #purchase to "a list of goods"
//if the attribute does not exist, this method would create one for it and then set the value we want
var id_node_purchase_7=document.getElementById("purchase");
id_node_purchase_7.setAttribute("title","a list of goods");
console.log("7 the title of the element whose id is purchase is "+id_node_purchase_7.getAttribute("title"));
//7 the title of the element whose id is purchase is a list of goods
















