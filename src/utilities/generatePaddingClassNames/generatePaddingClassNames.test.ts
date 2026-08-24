import generatePaddingClassNames from './generatePaddingClassNames';

describe('generatePaddingClassNames', () => {
  test('generates padding classes', () => {
    const classNames = generatePaddingClassNames({
      padding: '0',
      paddingTop: '1',
      paddingBottom: '2',
      paddingLeft: '3',
      paddingRight: '4',
      paddingX: '5',
      paddingY: '0',
    });

    expect(classNames).toBe('p-0 pt-1 pb-2 ps-3 pe-4 px-5 py-0');
  });

  test('generates responsive padding classes', () => {
    const classNames = generatePaddingClassNames({
      padding: { xs: '0', sm: '1' },
      paddingTop: { xs: '1', sm: '2' },
      paddingBottom: { xs: '2', sm: '3' },
      paddingLeft: { xs: '3', sm: '4' },
      paddingRight: { xs: '4', sm: '5' },
      paddingX: { xs: '5', sm: '0' },
      paddingY: { xs: '0', sm: '1' },
    });

    expect(classNames).toBe(
      'p-0 p-sm-1 pt-1 pt-sm-2 pb-2 pb-sm-3 ps-3 ps-sm-4 pe-4 pe-sm-5 px-5 px-sm-0 py-0 py-sm-1'
    );
  });

  test('returns an empty string when no properties are provided', () => {
    expect(generatePaddingClassNames({})).toBe('');
  });
});
