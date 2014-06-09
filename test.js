var octet = require('./index'),
    user = { name: 'Tobi' },
    fs = require('fs');

describe('octet', function(){
  it('should support locals', function (done) {
    var path = fs.readFileSync('./template.octet');
    var locals = { user: user };
    octet(path.toString(), locals, function (err, html) {
      if (err) return done(err);
      html.should.equal('<p>Tobi</p>');
      done();
    })
  });
  it('should support helpers', function (done) {
    var path = '<p><%this.uppercase(this.user.name)%></p>';
    var locals = { user: user, uppercase: function (str) {return str.toUpperCase()} };

    octet(path, locals, function(err, html){
      if (err) return done(err);
      html.should.equal('<p>TOBI</p>');
      done();
    });
  });
  it('should support sync call', function (done) {
    var path = '<p><%this.user.name%></p>';
    var locals = { user: user};

    var sync = octet(path, locals);
    if (sync.err == null) {
      sync.res.should.equal('<p>Tobi</p>');
      done()
    } else done(sync.err)
  });
  it('should support caching', function(done){
    var path = fs.readFileSync('./template.octet').toString();
    var locals = { user: user, cache: true };

    octet(path, locals, function(err, html){
      if (err) return done(err);

      fs.readFile = function(path){
        done(new Error('fs.readFile() called with ' + path));
      };
      html.should.equal('<p>Tobi</p>');

      octet(path, locals, function(err, html){
        if (err) return done(err);
        html.should.equal('<p>Tobi</p>');
        done();
      });
    });
  });
});
