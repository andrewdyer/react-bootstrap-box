import generateMarginClassNames from './generateMarginClassNames';

describe('generateMarginClassNames', () => {
  test('should generate "m-auto" class when margin is provided', () => {
    const classNames = generateMarginClassNames({ margin: 'auto' });

    expect(classNames).toBe('m-auto');
  });

  test('should generate responsive margin classes when responsive margin is provided', () => {
    const classNames = generateMarginClassNames({
      margin: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('m-auto m-sm-0');
  });

  test('should generate "mt-auto" class when marginTop is provided', () => {
    const classNames = generateMarginClassNames({ marginTop: 'auto' });

    expect(classNames).toBe('mt-auto');
  });

  test('should generate responsive marginTop classes when responsive marginTop is provided', () => {
    const classNames = generateMarginClassNames({
      marginTop: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('mt-auto mt-sm-0');
  });

  test('should generate "mb-auto" class when marginBottom is provided', () => {
    const classNames = generateMarginClassNames({ marginBottom: 'auto' });

    expect(classNames).toBe('mb-auto');
  });

  test('should generate responsive marginBottom classes when responsive marginBottom is provided', () => {
    const classNames = generateMarginClassNames({
      marginBottom: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('mb-auto mb-sm-0');
  });

  test('should generate "ms-auto" class when marginLeft is provided', () => {
    const classNames = generateMarginClassNames({ marginLeft: 'auto' });

    expect(classNames).toBe('ms-auto');
  });

  test('should generate responsive marginLeft classes when responsive marginLeft is provided', () => {
    const classNames = generateMarginClassNames({
      marginLeft: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('ms-auto ms-sm-0');
  });

  test('should generate "me-auto" class when marginRight is provided', () => {
    const classNames = generateMarginClassNames({ marginRight: 'auto' });

    expect(classNames).toBe('me-auto');
  });

  test('should generate responsive marginRight classes when responsive marginRight is provided', () => {
    const classNames = generateMarginClassNames({
      marginRight: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('me-auto me-sm-0');
  });

  test('should generate "mx-auto" class when marginX is provided', () => {
    const classNames = generateMarginClassNames({ marginX: 'auto' });

    expect(classNames).toBe('mx-auto');
  });

  test('should generate responsive marginX classes when responsive marginX is provided', () => {
    const classNames = generateMarginClassNames({
      marginX: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('mx-auto mx-sm-0');
  });

  test('should generate "my-auto" class when marginY is provided', () => {
    const classNames = generateMarginClassNames({ marginY: 'auto' });

    expect(classNames).toBe('my-auto');
  });

  test('should generate responsive marginY classes when responsive marginY is provided', () => {
    const classNames = generateMarginClassNames({
      marginY: { xs: 'auto', sm: '0' },
    });

    expect(classNames).toBe('my-auto my-sm-0');
  });

  test('should return an empty string when no properties are provided', () => {
    const classNames = generateMarginClassNames({});

    expect(classNames).toBe('');
  });
});
