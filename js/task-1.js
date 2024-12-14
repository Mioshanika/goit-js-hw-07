console.log("============================");
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  console.log(`Category: ${category.children.item(0).textContent}`);
  console.log(`Elements: ${category.children.item(1).children.length}`);
});
console.log("============================");
