var expect = require('expect.js'),
    hex = require('..');

describe('bytewise-hex', function() {
  it('should be able to do some basic encoding', function(done) {
    var text = 'hello world';
    var encoded = hex.encode(text);
    expect(encoded).to.equal('7068656c6c6f20776f726c64');
    var decoded = hex.decode(encoded);
    expect(decoded).to.equal(text);
    done();
  });
});
