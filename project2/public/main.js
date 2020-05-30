// call to API get products
let url = `/api/product`;

async function load() {
  let respond = await fetch(url);
  let listProducts = await respond.json();
  console.log(listProducts);
}
load();
