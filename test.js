// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {


    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//dollar to yen
test("One dollar should be 146.26 yen", function() {
// Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.92); // 1 dolar son 146.26 yenes, entonces 3.5 dolares deberían ser = (3.5 * 146.26)
})

/*  ///Yen to pound
test("One pound should be 0.005 yens", function() {
  // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.01); // 1 pound son 0.005 yenes, entonces 3.5 pounds deberían ser = (3.5 * 0.006)
}) */