function addDeclaration(length) {
    return length * length;
}  // geen puntkomma

console.log(addDeclaration(2));

const addExpression =function(number) {
    return number * number;
};

console.log(addExpression(3));

const addArrow = number => number * number;

console.log(addArrow(4));
