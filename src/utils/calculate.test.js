import Calculate from './calculate';

describe('calculate', () => {
  it('should correctly add', () => {
    // Arrange
    const calculateList = ['4', '6', '+'];
    // Asset
    expect(Calculate(calculateList).equal(['6', '10', '+']));
  });
  it('should correctly decrease', () => {
    // Arrange
    const calculateList = ['4', '6', '-'];
    // Asset
    expect(Calculate(calculateList).equal(['6', '-2', '-']));
  });
  it('should correctly multiply', () => {
    // Arrange
    const calculateList = ['4', '6', 'x'];
    // Asset
    expect(Calculate(calculateList).equal(['6', '24', 'x']));
  });
  it('should correctly divided', () => {
    // Arrange
    const calculateList = ['4', '6', '/'];
    // Asset
    expect(Calculate(calculateList).equal(['6', '0.66666666667', '/']));
  });
});
