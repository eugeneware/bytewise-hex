var expect = require('expect.js'),
    level = require('level'),
    path = require('path'),
    rimraf = require('rimraf'),
    hex = require('..');

describe('bytewise-hex', function() {
  var dbPath = path.join(__dirname, '..', 'data', 'testdb');
  beforeEach(function(done) {
    rimraf.sync(dbPath);
    done();
  });

  it('should be able to do some basic encoding', function(done) {
    var text = 'hello world';
    var encoded = hex.encode(text);
    expect(encoded).to.equal('7068656c6c6f20776f726c64');
    var decoded = hex.decode(encoded);
    expect(decoded).to.equal(text);
    done();
  });

  it('should be able to create a db with the hex encoding', function(done) {
    var db = level(dbPath, { keyEncoding: hex, valueEncoding: 'json' });
    db.put(['hello', 'world', 123], { something: 'here' }, get);
    function get(err) {
      if (err) return done(err);
      db.get(['hello', 'world', 123], function (err, data) {
        if (err) return done(err);
        expect(data).to.eql({ something: 'here' });
        db.close(done);
      });
    }
  });
});
