var octet = require('./index')
    fs = require('fs');

var html = octet('<p><%this.user.name%></p>', {user:{name:'John'}});
//=> <p>John</p>
console.log('Sync call response: ', html);

octet('<p><%this.uppercase(this.user.name)%></p>', {
  uppercase: function (str) {
    return str.toUpperCase();
  },
  user: {
    name: 'john uppercased'
  }
}, function (err, html) {
  if (err) console.log(err)
  //=> html == 'JOHN UPPERCASED'
  console.log('Async call response: ', html);
});
