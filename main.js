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