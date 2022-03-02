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
          <h5 class="card-title">name ${phone.brand}</h5>
          <h5 class="card-title">name ${phone.phone_name}</h5>
          <a onclick="detailsAllPhone('${phone.slug}')" class="btn btn-primary">Details</a>
         </div>
        </div>`;
        displayResult.appendChild(div);


    });

}

const detailsAllPhone = id => {
    // console.log(phone)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(optimize => showButton(optimize.data))
}


const showButton = mobile => {
    console.log(mobile)
    const show = document.getElementById('showDetails')
    const div = document.createElement('div');
    div.classList.add('col-12');
    console.log(mobile.mainFeatures.chipSet);
    div.innerHTML = `
        <div class="row mb-5 p-3">
          <div class="col-md-4">
          <img src="${mobile.image}" class="card-img-top" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card">
         <div class="card-body">
         <h3 class="card-title">MainFeature</h3>
          <h3 class="card-title">ChipSet:${mobile.mainFeatures.chipSet}</h3>
          <p><strong>DisplaySize: </strong>${mobile.mainFeatures.displaySize}</p>
          <p><strong>Memory: </strong>${mobile.mainFeatures.memory}</p>
          <p><strong>Storage: </strong>${mobile.mainFeatures.storage}</p>
          <p><strong>Sensors: </strong>${mobile.mainFeatures.sensors}</p>
          <h3 class="card-title">Others Features</h3>
          <p><strong>Bluetooth: </strong>${mobile.others.Bluetooth}</p>
          <p><strong>GPS: </strong>${mobile.others.GPS}</p>
          <p><strong>NFC: </strong>${mobile.others.NFC}</p>
          <p><strong>Radio: </strong>${mobile.others.Radio}</p>
          <p><strong>USB: </strong>${mobile.others.USB}</p>
          <p><strong>WLAN: </strong>${mobile.others.WLAN}</p>
         </div>
        </div>
          </div>
          
        </div>
    `;
    show.appendChild(div);
}