//* Declaration


const quantity1 = document.querySelector(".quantity1")
const quantity2 = document.querySelector(".quantity2") 



const buttonAdd1 = document.querySelector(".buttonAdd1")
const buttonAdd2 = document.querySelector(".buttonAdd2")

const buttonMinus1 = document.querySelector(".buttonMinus1")
const buttonMinus2 = document.querySelector(".buttonMinus2")

const total = document.querySelector(".total");

const perMoney1 = 54.99
const perMoney2 = 74.99

const submit = document.querySelector("#submit");
// events
buttonAdd1.addEventListener("click",function(){
    quantity1.innerText = Number(quantity1.innerText)+1
    total.textContent = "$"+(parseFloat(total.textContent.slice(1,))+54.99).toFixed(2)

})
buttonMinus1.addEventListener("click",function(){
    if (quantity1.innerText > 1){
    quantity1.innerText = Number(quantity1.innerText)-1;
    total.textContent = "$"+(parseFloat(total.textContent.slice(1,))-54.99).toFixed(2)
}
})
buttonAdd2.addEventListener("click",function(){
    quantity2.innerText = Number(quantity2.innerText)+1
    total.textContent = "$"+(parseFloat(total.textContent.slice(1,))+perMoney2).toFixed(2)

})
buttonMinus2.addEventListener("click",function(){
    if (quantity2.innerText > 1){
    quantity2.innerText = Number(quantity2.innerText)-1;
    total.textContent = "$"+(parseFloat(total.textContent.slice(1,))-perMoney2).toFixed(2)
}
})


submit.addEventListener("click",function(e){
    e.preventDefault()
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to return if you confirm!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, I'm sure."
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Accepted',
            text: 'Your order is taken.',
            icon: "success"
          })
        }
      })
    
})
