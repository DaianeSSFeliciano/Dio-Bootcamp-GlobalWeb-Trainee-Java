const Carro = {
    marca: "VW",
    modelo: "Golf",
    info: function () {
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}

let c2 = Object.create(Carro)

Carro.marca = 'Honda'
Carro.modelo = 'HRV'

c2.marca = 'Honda'
c2.modelo = 'HRV'

Carro ["marca"] = "GM"
Carro["modelo"] = "Camaro"

Carro.info()
console.log(Carro.marca)
console.log(Carro.modelo)

console.log(Carro["marca"])
console.log(Carro["modelo"])

Carro.info()
c2.info()