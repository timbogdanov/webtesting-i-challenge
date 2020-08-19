const enhancer = require('./enhancer.js');
// test away!

describe('test item functions', () => {
  it('should set durability to 100', () => {
    expect(enhancer.repair('stick').durability).toBe(100);
  });

  it('should enhance the enhancement from 17 to 18, 19, 20', () => {
    expect(enhancer.success('stick').enhancement).toBe(18);
    expect(enhancer.success('stick').enhancement).toBe(19);
    expect(enhancer.success('stick').enhancement).toBe(20);
  });

  it('should set durability to 80', () => {
    expect(enhancer.fail('stick').durability).toBe(90);
    expect(enhancer.fail('stick').durability).toBe(80);
    expect(enhancer.fail('stick').durability).toBe(70);
  });

  it('should set enhancment to -1', () => {
    expect(enhancer.fail('stick').enhancement).toBe(15);
  });
});
