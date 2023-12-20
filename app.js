let mobileData = [
  {
    brand: "Samsung",
    model: "SamsungA54",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "iPhone",
    model: "iPhone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "iPhone",
    model: "iPhone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
  {
    brand: "iPhone",
    model: "iPhoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    img: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03102023/1.jpg?$default-400-jpg$",
  },
];

const enableSearch = () => {

    const searchType = document.getElementById("searchType").value
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('button[type="button"]');

      if (searchType === 'brand' || searchType === 'model' || searchType === 'price') {
                searchInput.removeAttribute('disabled');
                searchButton.removeAttribute('class');
                searchInput.placeholder = `Now you can Enter ${searchType}`;
            } 
            else {
                searchInput.setAttribute('disabled', true);
                searchButton.setAttribute('class', true);
                searchInput.placeholder = 'Select a search type first';
            }
}

function searchProduct() {
  const searchType = document.getElementById("searchType").value;
  const searchInput = document.getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  let filteredProducts;

  if (searchType === "brand") {
    filteredProducts = mobileData.filter((product) =>
      product.brand.toLowerCase().includes(searchInput)
    );
  } else if (searchType === "model") {
    filteredProducts = mobileData.filter(
      (product) => product.model.toLowerCase() === searchInput
    );
  } else if (searchType === "price") {
    filteredProducts = mobileData.filter(
      (product) => product.price === searchInput
    );
  }

  displayProducts(filteredProducts);
}

function displayProducts(products) {
  const myProdDetail = document.getElementById("productDetails");
  myProdDetail.innerHTML = "";

  if (products.length > 0) {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
                        <br>
                        <hr>
                        <h4>${product.brand}</h4>
                        <p>Price: ${product.price}</p>
                        <p>Camera: ${product.camera}</p>
                        <p>RAM: ${product.ram}</p>
                        <p>ROM: ${product.rom}</p>
                        <span class="fs-2">${product.model}</span> <img style="width="100px" height="100px" src="${product.img}">
                        
                    `;
      myProdDetail.appendChild(productDiv);
    });
    console.log(myProdDetail);
  } else {
    myProdDetail.innerHTML = "<p>No matching products found!</p>";
  }
}
