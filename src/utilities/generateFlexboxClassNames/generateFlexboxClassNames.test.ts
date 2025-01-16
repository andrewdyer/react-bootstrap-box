import generateFlexboxClassNames from './generateFlexboxClassNames';

describe('generateFlexboxClassNames', () => {
    test('should generate "align-items-center" class when alignItems is provided', () => {
        const classNames = generateFlexboxClassNames({ alignItems: 'center' });

        expect(classNames).toBe('align-items-center');
    });

    test('should generate responsive "align-items" classes when responsive alignItems is provided', () => {
        const classNames = generateFlexboxClassNames({ alignItems: { xs: 'start', sm: 'end' } });

        expect(classNames).toBe('align-items-start align-items-sm-end');
    });

    test('should generate "align-self-center" class when alignSelf is provided', () => {
        const classNames = generateFlexboxClassNames({ alignSelf: 'center' });

        expect(classNames).toBe('align-self-center');
    });

    test('should generate responsive "align-self" classes when responsive alignSelf is provided', () => {
        const classNames = generateFlexboxClassNames({ alignSelf: { xs: 'start', sm: 'end' } });

        expect(classNames).toBe('align-self-start align-self-sm-end');
    });

    test('should generate "d-block" class when display is provided', () => {
        const classNames = generateFlexboxClassNames({ display: 'block' });

        expect(classNames).toBe('d-block');
    });

    test('should generate responsive "d" classes when responsive display is provided', () => {
        const classNames = generateFlexboxClassNames({ display: { xs: 'none', sm: 'block' } });

        expect(classNames).toBe('d-none d-sm-block');
    });

    test('should generate "flex-row" class when flexDirection is provided', () => {
        const classNames = generateFlexboxClassNames({ flexDirection: 'row' });

        expect(classNames).toBe('flex-row');
    });

    test('should generate responsive "flex" classes when responsive flexDirection is provided', () => {
        const classNames = generateFlexboxClassNames({
            flexDirection: { xs: 'row', sm: 'column' }
        });

        expect(classNames).toBe('flex-row flex-sm-column');
    });

    test('should generate "flex-fill" class when flexFill is provided', () => {
        const classNames = generateFlexboxClassNames({ flexFill: true });

        expect(classNames).toBe('flex-fill');
    });

    test('should generate responsive "flex-fill" classes when responsive flexFill is provided', () => {
        const classNames = generateFlexboxClassNames({ flexFill: { xs: true, sm: true } });

        expect(classNames).toBe('flex-fill flex-sm-fill');
    });

    test('should generate "flex-wrap" class when flexWrap is provided', () => {
        const classNames = generateFlexboxClassNames({ flexWrap: 'wrap' });

        expect(classNames).toBe('flex-wrap');
    });

    test('should generate responsive "flex-wrap" classes when responsive flexWrap is provided', () => {
        const classNames = generateFlexboxClassNames({ flexWrap: { xs: 'wrap', sm: 'nowrap' } });

        expect(classNames).toBe('flex-wrap flex-sm-nowrap');
    });

    test('should generate "justify-content-center" class when justifyContent is provided', () => {
        const classNames = generateFlexboxClassNames({ justifyContent: 'center' });

        expect(classNames).toBe('justify-content-center');
    });

    test('should generate responsive "justify-content" classes when responsive justifyContent is provided', () => {
        const classNames = generateFlexboxClassNames({
            justifyContent: { xs: 'start', sm: 'end' }
        });

        expect(classNames).toBe('justify-content-start justify-content-sm-end');
    });

    test('should return an empty string when no properties are provided', () => {
        const classNames = generateFlexboxClassNames({});

        expect(classNames).toBe('');
    });
});
