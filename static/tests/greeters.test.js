import  assert from 'assert';
import {sayHello} from '../src/greeters';

describe('Greeters', function() {
  describe('#sayHello()', function() {
    it('says hello to Mathieu', function() {
      assert.equal('Hello Mathieu!', sayHello('Mathieu'));
    });
  });
});
