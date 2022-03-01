const PhoneSearchResult = () =>{
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))

}
const 