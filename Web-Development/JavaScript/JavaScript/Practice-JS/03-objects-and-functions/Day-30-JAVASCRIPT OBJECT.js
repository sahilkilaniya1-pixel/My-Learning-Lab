/*Pillar 2: Prototypes & Prototype Chain (Memory Mechanism) */

/*Javascript me Classes real classes nahi hoti (jaise c++ ya java mein hoti hain).Js pure Protoypal Inhertance par kaam karti hai.

Prototype hota kya hai?
har js object ke pass ek internal link hota hai jisee [[prototype]] bolte hain (Developer Tools me ye __proto__ ke naam s dikhta hai.).

jab aap kisi object ki Property access karte ho: user.age

1.JS sabse phele dekhta hai: Kya age Property khud user object ke andar hai?
2.Agar HAAN-> js user ke [[prototype]] parent object me jaker dhoondhta hai.
3.Agar NAHI-> JS user ke [[prototype]] parent object me jaker dhoondhta hai.
*/
