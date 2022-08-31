import toNumber from '../toNumber';

describe('to number tests', () => {
  it('should get zero', () => {
    expect(toNumber('null')).toEqual(0);
    expect(toNumber(false)).toEqual(0);
    expect(toNumber('abc123')).toEqual(0);
    expect(toNumber('abc456.78')).toEqual(0);
    expect(toNumber('undefined')).toEqual(0);
  });

  it('should get correct numbers', () => {
    expect(toNumber('123')).toEqual(123);
    expect(toNumber('456.78')).toEqual(456);
    expect(toNumber('120.131415926', false)).toEqual(120.131415926);
  });
});
