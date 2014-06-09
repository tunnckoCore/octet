var octet = require('./index'),
    times = 50000,
    user = { name: 'Tobi' };

console.log('rendering from string ' + times + ' times');
var start = process.hrtime();
while (times--) {
  octet('<%if (this.user.name) { %><p><%this.user.name%></p><%}%>', { user: user });
}
var end = process.hrtime(start);
console.log('took ' + (end[0] + end[1] / 1e9) + 's');

