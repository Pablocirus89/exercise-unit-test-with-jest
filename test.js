
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})


test("One dollar should be 146.26 yen", function() {

    expect(fromDollarToYen(3.5)).toBe(511.92);
})


test("One yen should be 0.005 pounds", function() {

    expect(fromYenToPound(3.5)).toBe(0.026);
})