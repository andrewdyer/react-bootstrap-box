import generateFlexboxClassNames from './generateFlexboxClassNames';

describe('generateFlexboxClassNames', () => {
  test('should generate "align-items-center" class when alignItems is provided', () => {
    const classNames = generateFlexboxClassNames({ alignItems: 'center' });

    expect(classNames).toBe('align-items-center');
  });

  test('should generate responsive "align-items" classes when responsive alignItems is provided', () => {
    const classNames = generateFlexboxClassNames({
      alignItems: { xs: 'start', sm: 'end' },
    });

    expect(classNames).toBe('align-items-start align-items-sm-end');
  });

  test('should generate "align-self-center" class when alignSelf is provided', () => {
    const classNames = generateFlexboxClassNames({ alignSelf: 'center' });

    expect(classNames).toBe('align-self-center');
  });

  test('should generate responsive "align-self" classes when responsive alignSelf is provided', () => {
    const classNames = generateFlexboxClassNames({
      alignSelf: { xs: 'start', sm: 'end' },
    });

    expect(classNames).toBe('align-self-start align-self-sm-end');
  });

  test('should generate "d-block" class when display is provided', () => {
    const classNames = generateFlexboxClassNames({ display: 'block' });

    expect(classNames).toBe('d-block');
  });

  test('should generate responsive "d" classes when responsive display is provided', () => {
    const classNames = generateFlexboxClassNames({
      display: { xs: 'none', sm: 'block' },
    });

    expect(classNames).toBe('d-none d-sm-block');
  });

  test('should generate "flex-row" class when flexDirection is provided', () => {
    const classNames = generateFlexboxClassNames({ flexDirection: 'row' });

    expect(classNames).toBe('flex-row');
  });

  test('should generate responsive "flex" classes when responsive flexDirection is provided', () => {
    const classNames = generateFlexboxClassNames({
      flexDirection: { xs: 'row', sm: 'column' },
    });

    expect(classNames).toBe('flex-row flex-sm-column');
  });

  test('should generate "flex-fill" class when flexFill is provided', () => {
    const classNames = generateFlexboxClassNames({ flexFill: true });

    expect(classNames).toBe('flex-fill');
  });

  test('should generate responsive "flex-fill" classes when responsive flexFill is provided', () => {
    const classNames = generateFlexboxClassNames({
      flexFill: { xs: true, sm: true },
    });

    expect(classNames).toBe('flex-fill flex-sm-fill');
  });

  test('should generate "flex-wrap" class when flexWrap is provided', () => {
    const classNames = generateFlexboxClassNames({ flexWrap: 'wrap' });

    expect(classNames).toBe('flex-wrap');
  });

  test('should generate responsive "flex-wrap" classes when responsive flexWrap is provided', () => {
    const classNames = generateFlexboxClassNames({
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
    });

    expect(classNames).toBe('flex-wrap flex-sm-nowrap');
  });

  test('should generate "justify-content-center" class when justifyContent is provided', () => {
    const classNames = generateFlexboxClassNames({ justifyContent: 'center' });

    expect(classNames).toBe('justify-content-center');
  });

  test('should generate responsive "justify-content" classes when responsive justifyContent is provided', () => {
    const classNames = generateFlexboxClassNames({
      justifyContent: { xs: 'start', sm: 'end' },
    });

    expect(classNames).toBe('justify-content-start justify-content-sm-end');
  });

  test('should generate "order-0" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '0' });

    expect(classNames).toBe('order-0');
  });

  test('should generate "order-1" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '1' });

    expect(classNames).toBe('order-1');
  });

  test('should generate "order-2" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '2' });

    expect(classNames).toBe('order-2');
  });

  test('should generate "order-3" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '3' });

    expect(classNames).toBe('order-3');
  });

  test('should generate "order-4" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '4' });

    expect(classNames).toBe('order-4');
  });

  test('should generate "order-5" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: '5' });

    expect(classNames).toBe('order-5');
  });

  test('should generate "order-sm-0" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '0' } });

    expect(classNames).toBe('order-sm-0');
  });

  test('should generate "order-sm-1" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '1' } });

    expect(classNames).toBe('order-sm-1');
  });

  test('should generate "order-sm-2" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '2' } });

    expect(classNames).toBe('order-sm-2');
  });

  test('should generate "order-sm-3" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '3' } });

    expect(classNames).toBe('order-sm-3');
  });

  test('should generate "order-sm-4" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '4' } });

    expect(classNames).toBe('order-sm-4');
  });

  test('should generate "order-sm-5" class when responsive order sm is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: '5' } });

    expect(classNames).toBe('order-sm-5');
  });

  test('should generate "order-md-0" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '0' } });

    expect(classNames).toBe('order-md-0');
  });

  test('should generate "order-md-1" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '1' } });

    expect(classNames).toBe('order-md-1');
  });

  test('should generate "order-md-2" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '2' } });

    expect(classNames).toBe('order-md-2');
  });

  test('should generate "order-md-3" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '3' } });

    expect(classNames).toBe('order-md-3');
  });

  test('should generate "order-md-4" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '4' } });

    expect(classNames).toBe('order-md-4');
  });

  test('should generate "order-md-5" class when responsive order md is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: '5' } });

    expect(classNames).toBe('order-md-5');
  });

  test('should generate "order-lg-0" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '0' } });

    expect(classNames).toBe('order-lg-0');
  });

  test('should generate "order-lg-1" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '1' } });

    expect(classNames).toBe('order-lg-1');
  });

  test('should generate "order-lg-2" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '2' } });

    expect(classNames).toBe('order-lg-2');
  });

  test('should generate "order-lg-3" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '3' } });

    expect(classNames).toBe('order-lg-3');
  });

  test('should generate "order-lg-4" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '4' } });

    expect(classNames).toBe('order-lg-4');
  });

  test('should generate "order-lg-5" class when responsive order lg is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: '5' } });

    expect(classNames).toBe('order-lg-5');
  });

  test('should generate "order-xl-0" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '0' } });

    expect(classNames).toBe('order-xl-0');
  });

  test('should generate "order-xl-1" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '1' } });

    expect(classNames).toBe('order-xl-1');
  });

  test('should generate "order-xl-2" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '2' } });

    expect(classNames).toBe('order-xl-2');
  });

  test('should generate "order-xl-3" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '3' } });

    expect(classNames).toBe('order-xl-3');
  });

  test('should generate "order-xl-4" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '4' } });

    expect(classNames).toBe('order-xl-4');
  });

  test('should generate "order-xl-5" class when responsive order xl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: '5' } });

    expect(classNames).toBe('order-xl-5');
  });

  test('should generate "order-xxl-0" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '0' } });

    expect(classNames).toBe('order-xxl-0');
  });

  test('should generate "order-xxl-1" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '1' } });

    expect(classNames).toBe('order-xxl-1');
  });

  test('should generate "order-xxl-2" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '2' } });

    expect(classNames).toBe('order-xxl-2');
  });

  test('should generate "order-xxl-3" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '3' } });

    expect(classNames).toBe('order-xxl-3');
  });

  test('should generate "order-xxl-4" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '4' } });

    expect(classNames).toBe('order-xxl-4');
  });

  test('should generate "order-xxl-5" class when responsive order xxl is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: '5' } });

    expect(classNames).toBe('order-xxl-5');
  });

  test('should generate "order-first" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: 'first' });

    expect(classNames).toBe('order-first');
  });

  test('should generate "order-last" class when order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: 'last' });

    expect(classNames).toBe('order-last');
  });

  test('should generate responsive "order-first" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: 'first' } });

    expect(classNames).toBe('order-sm-first');
  });

  test('should generate responsive "order-last" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { sm: 'last' } });

    expect(classNames).toBe('order-sm-last');
  });

  test('should generate responsive "order-first" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: 'first' } });

    expect(classNames).toBe('order-md-first');
  });

  test('should generate responsive "order-last" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { md: 'last' } });

    expect(classNames).toBe('order-md-last');
  });

  test('should generate responsive "order-first" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: 'first' } });

    expect(classNames).toBe('order-lg-first');
  });

  test('should generate responsive "order-last" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { lg: 'last' } });

    expect(classNames).toBe('order-lg-last');
  });

  test('should generate responsive "order-first" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: 'first' } });

    expect(classNames).toBe('order-xl-first');
  });

  test('should generate responsive "order-last" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xl: 'last' } });

    expect(classNames).toBe('order-xl-last');
  });

  test('should generate responsive "order-first" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: 'first' } });

    expect(classNames).toBe('order-xxl-first');
  });

  test('should generate responsive "order-last" class when responsive order is provided', () => {
    const classNames = generateFlexboxClassNames({ order: { xxl: 'last' } });

    expect(classNames).toBe('order-xxl-last');
  });

  test('should return an empty string when no properties are provided', () => {
    const classNames = generateFlexboxClassNames({});

    expect(classNames).toBe('');
  });
});
