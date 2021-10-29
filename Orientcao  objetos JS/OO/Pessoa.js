
class Pessoa {
    constructor(_name, age)
     {
         this._name = _name;
         this.age = age;
     }

     get() {
         return this._name
     }
}

const pessoa = new Pessoa('Daiane', 22)

console.log(pessoa)

console.log(pessoa.get(_name))