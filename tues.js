class Animal{
    constructor(warmBlood, numLegs, name){
        this.warmBlood = warmBlood;
        this.numLegs = numLegs;
        this.name = name;
    }
    vocal(sound)
    {
        console.log(`The ${this.name} says ${sound}`)
    }
}

let dog = new Animal(true, 4, "dog");
dog.vocal("woof")

class Cat extends Animal{
    constructor(hairLength, eyeColor, hairColor){
        super(true, 4, "cat");
        this.hairLength = hairLength;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
}

class Snake extends Animal{
    constructor(venemous, bodyLength, rattle){
        super(false, 0, "snake");
        this.bodyLength = bodyLength;
        this.venemous = venemous;
        this.rattle = rattle;
    }
}