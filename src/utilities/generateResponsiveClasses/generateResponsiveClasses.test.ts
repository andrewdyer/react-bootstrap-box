import generateResponsiveClasses from './generateResponsiveClasses';

describe('generateResponsiveClasses', () => {
  it('should generate class names with breakpoints, excluding "xs"', () => {
    expect(generateResponsiveClasses('d', { xs: 'none', sm: 'block' })).toEqual(
      {
        'd-none': true,
        'd-sm-block': true,
      }
    );
  });

  it('should generate class names with a single value', () => {
    expect(generateResponsiveClasses('float', 'end')).toEqual({
      'float-end': true,
    });
  });

  it('should return an empty object for undefined values', () => {
    expect(generateResponsiveClasses('float', undefined)).toEqual({});
  });

  // New test case for boolean value with a suffix
  it('should generate class names with a boolean value and suffix', () => {
    expect(generateResponsiveClasses('flex', true, 'fill')).toEqual({
      'flex-fill': true,
    });
  });

  // New test case for boolean value with breakpoints and suffix
  it('should generate class names with boolean breakpoints and suffix', () => {
    expect(
      generateResponsiveClasses('flex', { sm: true, lg: true }, 'grow')
    ).toEqual({
      'flex-sm-grow': true,
      'flex-lg-grow': true,
    });
  });

  // New test case for a mixed object with strings and boolean values
  it('should generate class names with mixed strings and boolean values', () => {
    expect(
      generateResponsiveClasses(
        'flex',
        { xs: 'row', sm: true, md: 'column', lg: true },
        'grow'
      )
    ).toEqual({
      'flex-grow-row': true,
      'flex-sm-grow': true,
      'flex-md-grow-column': true,
      'flex-lg-grow': true,
    });
  });

  // New test case for a single string value with a suffix used as an infix
  it('should generate class names with a string value and suffix', () => {
    expect(generateResponsiveClasses('flex', '0', 'grow')).toEqual({
      'flex-grow-0': true,
    });
  });

  // New test case for string breakpoints with a suffix used as an infix
  it('should generate class names with string breakpoints and suffix', () => {
    expect(
      generateResponsiveClasses('flex', { xs: '0', sm: '1' }, 'grow')
    ).toEqual({
      'flex-grow-0': true,
      'flex-sm-grow-1': true,
    });
  });
});
