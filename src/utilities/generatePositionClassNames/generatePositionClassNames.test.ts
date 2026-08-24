import generatePositionClassNames from './generatePositionClassNames';

describe('generatePositionClassNames', () => {
  test.each(['static', 'relative', 'absolute', 'fixed', 'sticky'] as const)(
    'should generate "position-%s" class',
    (position) => {
      const classNames = generatePositionClassNames({ position });

      expect(classNames).toBe(`position-${position}`);
    }
  );

  test.each([
    ['top', '0'],
    ['start', '50'],
    ['bottom', '100'],
    ['end', '0'],
  ] as const)('should generate "%s-%s" edge class', (edge, value) => {
    const classNames = generatePositionClassNames({ [edge]: value });

    expect(classNames).toBe(`${edge}-${value}`);
  });

  test('should generate multiple position classes', () => {
    const classNames = generatePositionClassNames({
      position: 'absolute',
      top: '50',
      start: '100',
    });

    expect(classNames).toBe('position-absolute top-50 start-100');
  });

  test('should return an empty string when no properties are provided', () => {
    const classNames = generatePositionClassNames({});

    expect(classNames).toBe('');
  });
});
