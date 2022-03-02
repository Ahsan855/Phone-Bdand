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
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card">
          <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">name${phone.brand}}</h5>
          <h5 class="card-title">name${phone.phone_name}}</h5>
          <a href="${phone.slug}" class="btn btn-primary">Details</a>
         </div>
        </div>`;
        displayResult.appendChild(div);


    });

}