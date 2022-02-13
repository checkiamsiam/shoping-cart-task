function inCrease(quantity, priceField, price) {
  document.getElementById(quantity).value = Number(document.getElementById(quantity).value) + 1;
  document.getElementById(priceField).innerText = Number(document.getElementById(priceField).innerText) + price;
  document.getElementById('sub-total').innerText = Number(document.getElementById('sub-total').innerText) + price;
}
function decrease(quantity, rmvId, priceField, price) {
  if (Number(document.getElementById(quantity).value) <= 0) {
    document.getElementById(rmvId).setAttribute('disabled');
  }
  document.getElementById(quantity).value = Number(document.getElementById(quantity).value) - 1;
  if (document.getElementById(quantity).value >= 0) {
    document.getElementById('sub-total').innerText = Number(document.getElementById('sub-total').innerText) - price;
    document.getElementById(priceField).innerText = Number(document.getElementById(priceField).innerText) - price;
  } else {
    document.getElementById(priceField).innerText = 0;
  }
}
function zeroQuantity(target , price){
  document.getElementById(target).value = 0;
  document.getElementById('sub-total').innerText = Number(document.getElementById('sub-total').innerText) - Number(document.getElementById(price).innerText);
  document.getElementById(price).innerText = 0;
}
document.getElementById('add-quantity-phone').addEventListener('click', function () {
  inCrease('quantity-phone', 'price-phone', 1219);
})
document.getElementById('rmv-quantity-phone').addEventListener('click', function () {
  decrease('quantity-phone', 'rmv-quantity-phone', 'price-phone', 1219);
})
document.getElementById('add-quantity-cover').addEventListener('click', function () {
  inCrease('quantity-cover', 'price-cover', 59);
})
document.getElementById('rmv-quantity-cover').addEventListener('click', function () {
  decrease('quantity-cover', 'rmv-quantity-cover', 'price-cover', 59);
})
document.getElementById('checkout-btn').addEventListener('click',function(){
  document.getElementById('tax').innerText = (document.getElementById('sub-total').innerText * (1/100)).toFixed(2);
  document.getElementById('total').innerText = Number(document.getElementById('sub-total').innerText) + Number(document.getElementById('tax').innerText);
})
document.getElementById('rmv1').addEventListener('click',function(){
  zeroQuantity('quantity-phone' , 'price-phone');
})
document.getElementById('rmv2').addEventListener('click',function(){
  zeroQuantity('quantity-cover', 'price-cover');
})