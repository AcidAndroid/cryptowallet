//Primer forma Objetc Literal
var obj = {};
var person = {
    name: "KEll",
    surname: "Dintch",
    age: 24,
    address: {
        street: "asjdklasjdkl"
    }
}

//Segunda forma Constructor para cuando se necesitan metodos en el objetos
function Person(name, surname, age, addr) {
    this.name = name
    this.surname = surname
    this.age = age
    this.address = addr

}

var yo = new Person("Pollo", "Loco", 44, { street: "njureihkjfbdkjg" });
var yo2 = new Person("Kell", "Dintch", 32, { street: "uiewhrhufewi" });

console.log(yo)
console.log(yo2)
console.log(yo2.constructor)

//Tercer forma Factoria cuando NO se necesita metodos
function personFactory(name, surname, age, addr) {
    return {
        name: name,
        surname: surname,
        age: age,
        addr: addr
    }

}

var personaPorFactory = personFactory("Pavo", "Locon", 31, { street: "fhrlouhegjbksd" })

console.log(personaPorFactory);

//Prototipos para extender un objeto por contructor

Person.prototype.printFullName = function() {
    console.log(this.name + ' ' + this.surname);
}
console.log(yo.printFullName());

//Se agrega un valor a todos los que herdan de Person
Person.prototype.country = "Mexico"

function Programmer(language) {
    this.language = language;
}

var progrmador = new Programmer("JS")
console.log(progrmador);

//Con esto se hace programare hijo de persona
Programmer.prototype = Object.create(Person.prototype)

//Se ve la diferencia entre antes y despues de heredar
console.log(progrmador);

//El encapsulamento en JS se hace asi para volver algo readonly

function PersonEncapsula(name, surname, age, addr) {
    var name = name;
    this.getname = function() { return name }
    this.surname = surname
    this.age = age
    this.address = addr
}

//ahora solo puedo asignar name al consruit el objeto
var yoEncapsulado = new PersonEncapsula("Yo estoy fijo", "encapsulado", 31, { street: "fhrlouhegjbksd" })
console.log("Obtengo el nombre del objeto cuando lo creo" + yoEncapsulado.getname())
yoEncapsulado.name = "CAMBIA NOMBRE"
console.log("JAJAJAJ NO CAMBIE:" + yoEncapsulado.getname())

//Polimorfismo
//Se sobre escribe los metodos del padre
Programmer.prototype.printFullName = function() {
    console.log(this.name + ' ' + this.surname + 'Alias el rompe teclas');
}