import generateBorderClassNames from './generateBorderClassNames';

describe('generateBorderClassNames', () => {
  test('should generate "border" class when border is provided', () => {
    const classNames = generateBorderClassNames({ border: true });

    expect(classNames).toBe('border');
  });

  test('should generate "border-top" class when borderTop is provided', () => {
    const classNames = generateBorderClassNames({ borderTop: true });

    expect(classNames).toBe('border-top');
  });

  test('should generate "border-top-0" class when borderTop 0 is provided', () => {
    const classNames = generateBorderClassNames({ borderTop: 0 });

    expect(classNames).toBe('border-top-0');
  });

  test('should generate "border-end" class when borderEnd is provided', () => {
    const classNames = generateBorderClassNames({ borderEnd: true });

    expect(classNames).toBe('border-end');
  });

  test('should generate "border-end-0" class when borderEnd 0 is provided', () => {
    const classNames = generateBorderClassNames({ borderEnd: 0 });

    expect(classNames).toBe('border-end-0');
  });

  test('should generate "border-bottom" class when borderBottom is provided', () => {
    const classNames = generateBorderClassNames({ borderBottom: true });

    expect(classNames).toBe('border-bottom');
  });

  test('should generate "border-bottom-0" class when borderBottom 0 is provided', () => {
    const classNames = generateBorderClassNames({ borderBottom: 0 });

    expect(classNames).toBe('border-bottom-0');
  });

  test('should generate "border-start" class when borderStart is provided', () => {
    const classNames = generateBorderClassNames({ borderStart: true });

    expect(classNames).toBe('border-start');
  });

  test('should generate "border-start-0" class when borderStart 0 is provided', () => {
    const classNames = generateBorderClassNames({ borderStart: 0 });

    expect(classNames).toBe('border-start-0');
  });

  test('should generate "border-primary" class when borderColor primary is provided', () => {
    const classNames = generateBorderClassNames({ borderColor: 'primary' });

    expect(classNames).toBe('border-primary');
  });

  test('should generate "border-1" class when borderWidth 1 is provided', () => {
    const classNames = generateBorderClassNames({ borderWidth: '1' });

    expect(classNames).toBe('border-1');
  });

  test('should generate multiple classes when multiple properties are provided', () => {
    const classNames = generateBorderClassNames({
      border: true,
      borderColor: 'primary',
      borderWidth: '1',
    });

    expect(classNames).toBe('border border-primary border-1');
  });

  test('should return an empty string when no properties are provided', () => {
    const classNames = generateBorderClassNames({});

    expect(classNames).toBe('');
  });
});
