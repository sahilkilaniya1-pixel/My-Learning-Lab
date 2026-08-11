/*Pillar 2: Prototypes & Prototype Chain (Memory Mechanism) */

/*Javascript me Classes real classes nahi hoti (jaise c++ ya java mein hoti hain).Js pure Protoypal Inhertance par kaam karti hai.

Prototype hota kya hai?
har js object ke pass ek internal link hota hai jisee [[prototype]] bolte hain (Developer Tools me ye __proto__ ke naam s dikhta hai.).

jab aap kisi object ki Property access karte ho: user.age

1.JS sabse phele dekhta hai: Kya age Property khud user object ke andar hai?
2.Agar HAAN-> js user ke [[prototype]] parent object me jaker dhoondhta hai.
3.Agar NAHI-> JS user ke [[prototype]] parent object me jaker dhoondhta hai.
4-Agar parent me bhi nahi mila -> Parent ke parent me dekhta hain (isi chain ko prototype chain bolte hain).
5-chain ke aakhri me Object.prototype hota hai. Jiska prototype null hota hain. Agar tab bhi na mile , toh undefined milta hai.
*/


// Object.create() se Direct Prototype Linking
const human  = {
    isAlive: true,
    eat(){
        console.log(`${this.name} khana kha raha hai.`);
    }
};
// Child object banana aur prototype link set karna
const student = Object.create(human);//student ka [[Prototype]] =human

student.name = "Sahil"; //Own Property
student.study = function(){
    console.log(`${this.name} padh raha hai.`);
};

//Check Properties
student.eat();  //Output: Sahil khana kha raha hai.(parent se mila).
student.study(); //output: Sahil padh raha hain. (Apna khud ka hai).

console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("isAlive"));