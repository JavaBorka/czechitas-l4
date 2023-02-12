// tady je místo pro náš program

//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'
/*
const adresa = {
  ulice: 'Pod Kaštany',
  cislo: 31,
  mesto: 'Horní Dlouhonosy',
  psc: '123 11'
}
*/

const address = {
	streetName: 'Pod Kaštany',
	number: 31,
	city: 'Horní Dlouhonosy',
	postalCode: '123 11',
  }
  
  // let vstupUzivatel = prompt("Zadej správné číslo domu:")
  // address.number = Number(vstupUzivatel)
  
  const user1 = {
	fullName: 'Lubomír Větvička',
	login: 'lubos',
	address: {
	  streetName: 'Pod Kaštany',
	  number: 31,
	  city: 'Horní Dlouhonosy',
	  postalCode: '123 11'
	},
	cartItems: 1
  }
  
  // DESTRUKTUROVÁNÍ
  
  /*
  const product = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč'
  }
  
  const {name, price, currency} = product
  */
  
  /* Tento zápis nám vytvoří tři proměnné viz. níže:
  const name = product.name
  const price = product.price
  const currency = product.currency
  */
  
  /*
  document.body.innerHTML = (
	'<h1> Produkt: ' + name + '</h1>' +
	'<p>Cena: ' + price + " " + currency + '</p>'
  );
  */
  
  //Interpolace řeťezců
  //Abychom se ze všeho toho sčítání a uvozovek nezbláznili, moderní JavaScript nabízí nový zápis řetězců, kterému se odborně říká interpolace řetězců. V tomto zápisu se místo obyčejných nebo dvojitých uvozovek používá takzvaný zpětný apostrof `
  
  /*
  document.body.innerHTML =
	`<h1> Produkt: ${name} </h2>` +
	`<p> Cena: ${price} ${currency}`
  */
  
  const order = {
	id: 37214,
	product: 'pěnová matrace',
	delivery: '21.8.2021',
  };
  
  const {id, product, delivery} = order;
  
  /*
  document.body.innerHTML = 
	`<h1> Objednávka ${id} </h1>` +
	`<p> Zboží ${product} bude doručeno ${delivery} </p>`
  */
  
  /*
  const { id, product, delivery } = order;
  
  document.body.innerHTML = (
	'<h2>Objednávka: ' + id + '</h2>' +
	'<p>Zboží ' + product + ' bude doručeno ' + delivery + '.</p>'
  );
  */
  
  document.body.innerHTML = 
	`<h1> Objednávka ${String(id).padStart(8,0)} </h1>` +
	`<p> Zboží ${product} bude doručeno ${delivery} </p>`
  
  