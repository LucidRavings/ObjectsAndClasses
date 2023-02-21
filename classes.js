
class Dog {
    constructor (name, breed, age){
        this.name = name,
        this.breed = breed,
        this.age = age,
        this.legs = 4,
        this.hypoAllergenic = false,
        this.isAlive = true
    }

    updateHypo(){
        this.hypoAllergenic = true
    }

    greeting(){
        console.log(`HI, my name is ${this.name} and I am a ${this.age} years old ${this.breed}`)
    }
}

const dog1 = new Dog("Scooter", "Mutt", 3)
const dog2 = new Dog("Doggo", "unknown", 8)

dog2.updateHypo()

console.log(dog1)
console.log(dog2)

dog1.greeting()

class Puppy extends Dog {
    constructor(name, breed, age, color, legs, hypoAllergenic, isAlive, ){
    super(name, breed, age, legs, hypoAllergenic, isAlive)

    this.color = color,
    this.trainingLevel = 0
    }

    updateTraining(num){
this.trainingLevel += num
    }
}

const puppers = new Puppy("Kevin", "York Shire Terrier", .6, "brown/black" )
const bubs = new Puppy("Wanda", "Irish Setter", 1, "golden/brown")

puppers.updateHypo()

bubs.updateTraining(1)

console.log(puppers)
puppers.greeting()

console.log(bubs)
bubs.greeting()

