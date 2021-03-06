// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';
import { modulo } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('test adding', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// name your test by what it is testing
test('test subtracting', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(5, 4); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// name your test by what it is testing
test('test multiplying', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 42;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(6, 7); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// name your test by what it is testing
test('test dividing', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(8, 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// name your test by what it is testing
test('test modulo', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = modulo(12, 5); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});