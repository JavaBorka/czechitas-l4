// V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly:

const title = 'Four Lions'

// Vypište do konzole počet znaků názvu.

console.log(title.length)

// Vypište název filmu převedený na velká písmena.

console.log(title.toLocaleUpperCase())

// Vyřízněte z názvu prvních pět písmen.

console.log(title.slice(0,5))

// Vyřízněte z názvu posledních pět písmen.

console.log(title.slice(title.length-5,title.length))

/// ÚKOL 2 - EMAILY
// Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu jmeno.prijmeni@domena

// Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email

const email = prompt('Zadejte svůj email');

// Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.

const atIndex = email.indexOf('@');

// Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.

const jmeno = email.slice(0,email.indexOf('.'));
const prijmeni = email.slice(email.indexOf('.')+1, email.indexOf('@'));
const jmenoUzivatele = jmeno + '.' + prijmeni;

// Dále z e-mailu vyřízněte název domény tedy například gmail.com.

const domena = email.slice(email.indexOf('@')+1,email.length);

// Ze získaných informací vytvořte objekt, který bude vypadat například takto:

const parsedEmail = {
    userName: jmenoUzivatele,
    domain: domena,
}

let vypisJmenoUzivatele = document.querySelector('.userName');
vypisJmenoUzivatele.innerHTML = "Uživatelské jméno: " + parsedEmail.userName;

let vypisDomenu = document.querySelector('.domain');
vypisDomenu.innerHTML = 'Doména: ' + parsedEmail.domain;

// ÚKOL 3 - DORUČOVÁNÍ

// Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.
//Uložte všechny údaje do vhodně pojmenovaných proměnných.
// Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže:
/*
<address>
	<p>Pod Stájemi 67</p>
	<p>12754 Klysnov</p>
</address>
*/

/*
const ulice = prompt('Zadej svojí ulici');
const cisloDomu = prompt('Zadej číslo domu');
const mesto = prompt('Zadej město');
const psc = prompt('Zadej psc');

 const address = {
    street: ulice,
    houseNo: cisloDomu,
    town: mesto,
    zip: psc,
 }

 const {street, houseNo, town, zip} = address;

 const vypis = `
    <address>
        <p> ${street} ${houseNo} </p>
        <p> ${town} ${zip} </p>
    </address>
`
document.body.innerHTML = vypis;
*/