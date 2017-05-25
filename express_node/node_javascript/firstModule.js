function awesomeFunction() {
  console.log('awesomeFunction was called.');
}

var aString = 'Yo, I am a string!';

// You can add module in front of exports, but
  // don't have to . . . because both module.exports
    // and exports reference the same object
exports.awesomeFunction = awesomeFunction;
exports.aString = aString;
