const PhoneSearchResult = () => {
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mobileReviwe(data.data))

}
const mobileReviwe = phones => {
    const displayResult = document.getElementById('displayResult')
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card">
          <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">name${phone.brand}}</h5>
          <h5 class="card-title">name${phone.phone_name}}</h5>
          <a onclick="detailsAllPhone('${phone.slug}')" class="btn btn-primary">Details</a>
         </div>
        </div>`;
        displayResult.appendChild(div);


    });

}

const detailsAllPhone = phone =>{
// console.log(phone)
const url =`https://openapi.programming-hero.com/api/phone/${phone}`
fetch(url)
.then(res => res.json())
.then(optimize => showButton(optimize.data))
}


const showButton = mobile =>{
   console.log(mobile)
   const show=document.getElementById('showDetails')
   const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card">
          <img src="${mobile.mainfeature.img}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">name${phone.brand}}</h5>
          <h5 class="card-title">name${mobile.Mainfeature.nam}}</h5>
          <a onclick="detailsAllPhone('${phone.slug}')" class="btn btn-primary">Details</a>
         </div>
        </div>`;
        show.appendChild(div);
}