const phone = {
  name: 'IPhone 13',
  brand: 'Apple',
  price: 10000,
  discount: 3,
  currencyPrice: function () {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.price)
  },
  finalPrice: function () {
    let discount = (this.price * this.discount) / 100
    let price = this.price - discount
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  },
}

console.log(phone.currencyPrice());
console.log(phone.finalPrice());