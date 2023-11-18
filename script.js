function addCar() {
  car = {
    key: carKey.value,
    brand: carBrand.value,
    price: carPrice.value,
  };

  if (car.key == "" || car.brand == "" || car.price == "") {
    alert("Enter All Details");
  } else {
    if (car.key in localStorage) {
      alert("key Already Exists");
    } else {
      localStorage.setItem(car.key, JSON.stringify(car));
    }
  }
}

function retCar() {
  let key = keyR.value;
  console.log(key);
  if (key in localStorage) {
    let car = JSON.parse(localStorage.getItem(key));
    console.log(car);
    result.innerHTML = `<div class="card" style="width: 100%;margin-top: 5px">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Car Key: ${car.key}</li>
      <li class="list-group-item">Car Brand: ${car.brand}</li>
      <li class="list-group-item">car Price ${car.price}</li>
    </ul>
  </div>`;
  } else {
    alert("Incorrect key");
  }
}

function delCar() {
  let key = keyD.value;
  console.log(key);
  if (key in localStorage) {
    localStorage.removeItem(key);
    result1.innerHTML = `<div class="card" style="width: 100%;margin-top: 5px ;background-color: crimson;padding:5px">
        <p style="color: white; text-align:center;"><b>Car Record Deleted</b></p>
  </div>`;
  } else {
    alert("Inavlid Key");
  }
}

function storageClear() {
  localStorage.clear();
  result2.innerHTML = `<div class="card" style="width: 100%;margin-top: 5px ;background-color: crimson;padding:5px">
        <p style="color: white; text-align:center;"><b>All Record Deleted</b></p>
  </div>`;
}
