// The firstModule can be simplified; let's export everything at once

module.exports = {
  anotherFunc: function () {
    console.log('Exported!');
  },
  myVariable: 'And I am an exported variable!'
};
