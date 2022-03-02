const PhoneSearchResult = () =>{
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mobileReviwe(data.data))

}
const mobileReviwe = phones =>{
    const displayResult =document.getElementById('displayResult')
    phones.forEach(phone => {
        console.log(phone)
        const newDiv =document.createElement('div')
        newDiv.classList.add('col')
    });
    
}
