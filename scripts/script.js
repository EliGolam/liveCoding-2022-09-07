// Initial Handshake
console.log('Script: LOADED!');

// Initialize containers
const liveCoding = document.getElementById('live-coding');
const exercise = [];
let message = '';



// EXERCISE 1: 
/* Create a ball object with the properties name and weight */
const ball = {
    name: 'Wilson',
    weight: 10
}

message = `EX1 - Ball Properties: name - ${ball.name}, weight - ${ball.weight}`;
exercise.push(message);



// EXERCISE 2: 
/* Modify ball weight */
let inpWeight
// do {
//     inpWeight = parseInt(prompt('Insert ball weight'));
// } while(isNaN(inpWeight));

// ball.weight = inpWeight;
ball.weight = 5;
message = `EX2 - Ball Properties Changed: weight - ${ball.weight}`;
exercise.push(message);



// EXERCISE 3: 
/* Triangle rectagle with height and base. Calculate Area and Perimeter */
const triangleRect = {
    base: 5,
    height: 10,
}

const area = triangleRect.base * triangleRect.height / 2; 
message = `EX3 - Triangle area:  ${area}`;
exercise.push(message);
message = `EX3 - Triangle perimeter:  ${calcPerimeter(triangleRect).toFixed(2)}`;
exercise.push(message);

function calcPerimeter(triangle) {
    const hypothenuse = calcHypothenuse(triangle);
    return hypothenuse + triangle.base + triangle.height;
}

function calcHypothenuse(triangle) {
    return Math.sqrt(Math.pow(triangle.base, 2) + Math.pow(triangle.height, 2));
}




// RESULTS
for (let i = 0; i < exercise.length; i++) {
    const result = document.createElement('p');
    result.classList.add('result');
    result.innerHTML = exercise[i];
    liveCoding.append(result);
}
 