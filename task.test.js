const {test, expect, describe } = require('@jest/globals');
const { stringLength, reverseString, Calculator, capitalize } = require('./tasks');

describe('Tests for string length', () => {
    test('return length of string', () =>{
        // Arrange
        const string = 'Thomas';

        // Act
        const lengthOfString = stringLength(string);

        // Assert
        expect(lengthOfString).toBe(6);
    });
        test('An invalid string',() => {
            // Arrange
            const string = 'RandomAccessMemory';
    
            // Act && Assert
            expect(() => stringLength(string)).toThrow(Error);
    });

});

describe('Return a reversed string', () => {
    test('String should be reversed', () => {
      // Arrange
      const string = 'mar';
  
      //Act
      let stringIsReversed = reverseString(string);
  
      // Assert
      expect(stringIsReversed).toBe('ram');
    });
});

describe('Basic mathematical Operations', () => {
    describe('Addition of whole number', () => {
      test('Add two numbers  1 and 3 to get a sum (4)', () => {
        // Arrange and Act
        const add = new Calculator(1, 3);
        
        // Assert
        expect(add.addition()).toEqual(4);
      })
 
    })
  
    describe('Subtraction of a whole number', () => {
      test('Subtract 6 from 1 to get difference (5)', () => {
        // Arrange and Act
        const subtract = new Calculator(6, 1);
        
        // Assert
        expect(subtract.subtraction()).toEqual(5);
      })
    })
  
    describe('Multiplication of a whole number', () => {
      test('Multiply 2 by 3 to get a product 6', () => {
        // Arrange and Act
        const multiply = new Calculator(2, 3);
        
        // Assert
        expect(multiply.multiplication()).toEqual(6);
      });
    });

    describe('Division of a whole number', () => {
        test('Divide 6 by 3 to get a dividend 2', () => {
          // Arrange and Act
          const divide = new Calculator(6, 3);
          
          // Assert
          expect(divide.division()).toEqual(2);
        });
      });
});

describe('Return a Capitalized String', () => {
    test(`String's first character should be capitalized`, () => {
      // Arrange
      const stringName = 'greeting';
  
      //Act
      let stringIsCapitalized = capitalize(stringName);
  
      // Assert
      expect(stringIsCapitalized).toBe('Greeting');
    });
    test('Inputted invalid string', () => {
      // Arrange
      const string = 0;
      
      // Act and Assert
      expect(() => capitalize(string)).toThrow(Error);
    });
  });
