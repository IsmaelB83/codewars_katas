const assert = require('assert');
const parseBankAccount = require('../index');

describe('parseBankAccount tests', function() {
  it('parseBankAccount should return the bank account number from the specified string', () => {
      [
          {
              text:    '    _  _     _  _  _  _  _ \n'+
                       '  | _| _||_||_ |_   ||_||_|\n'+
                       '  ||_  _|  | _||_|  ||_| _|\n',
              result: 123456789
          },{
              text:    ' _  _  _  _  _  _  _  _  _ \n'+
                       '| | _| _|| ||_ |_   ||_||_|\n'+
                       '|_||_  _||_| _||_|  ||_| _|\n',
              result: 23056789,

          },{
              text:    ' _  _  _  _  _  _  _  _  _ \n'+
                       '|_| _| _||_||_ |_ |_||_||_|\n'+ 
                       '|_||_  _||_| _||_| _||_| _|\n',
              result: 823856989
          }
      ].forEach(data => {
          assert.equal(
              parseBankAccount(data.text),
              data.result,
              `${data.text} has not parsed correctly:`
          );
      });
  });
});