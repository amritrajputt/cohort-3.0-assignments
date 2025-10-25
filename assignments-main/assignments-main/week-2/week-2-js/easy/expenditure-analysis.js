/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = {}
  for(let transcation of transactions){
    const {category,price} = transcation
    if(categories[category]) {
      categories[category] += price
    }else{
      categories[category] = price
    }
  }
  const result = []
  for(let category in categories){
    result.push({
      category:category,
      totalSpent: categories[category]
    })
  }
  return result
}
const ans = calculateTotalSpentByCategory([{category:"Food",price:70},{category:"Food",price:100}])
console.log(ans);

module.exports = calculateTotalSpentByCategory;
