const student = {
    name: "Marie",
    age: 20,
    cours: []
};
student.age = 21;
student.grade = "A";
student.cours.push("Math", "Physics", "Chemistry");
const physicsIndex = student.cours.indexOf("Physics");
const firstTwoCourses = student.cours.slice(0, 2);
console.log(student);
console.log(physicsIndex);
console.log(firstTwoCourses);
//let fruits = ['pomme', 'banane', 'orange', 'fraise', 'mangue'];

// Extraire une portion du tableau de l'indice 1 à l'indice 3 (l'indice de fin n'est pas inclus)
////let slicedFruits = fruits.slice(1, 3);

// Trouver l'indice de l'élément 'orange'
////let index = fruits.indexOf('orange');