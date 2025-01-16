import generateTypographyClassNames from './generateTypographyClassNames';

describe('generateTypographyClassNames', () => {
    test('should generate "fs-3" class when fontSize is provided', () => {
        const classNames = generateTypographyClassNames({ fontSize: '3' });

        expect(classNames).toBe('fs-3');
    });

    test('should generate "fw-bold" class when fontWeight is provided', () => {
        const classNames = generateTypographyClassNames({ fontWeight: 'bold' });

        expect(classNames).toBe('fw-bold');
    });

    test('should generate responsive textAlign classes when responsive textAlign is provided', () => {
        const classNames = generateTypographyClassNames({
            textAlign: { xs: 'center', sm: 'start' }
        });

        expect(classNames).toBe('text-center text-sm-start');
    });

    test('should generate "text-wrap" class when textWrap is true', () => {
        const classNames = generateTypographyClassNames({ textWrap: true });

        expect(classNames).toBe('text-wrap');
    });

    test('should generate "text-nowrap" class when textNoWrap is true', () => {
        const classNames = generateTypographyClassNames({ textNoWrap: true });

        expect(classNames).toBe('text-nowrap');
    });

    test('should generate "text-capitalize" class when textTransform is provided', () => {
        const classNames = generateTypographyClassNames({ textTransform: 'capitalize' });

        expect(classNames).toBe('text-capitalize');
    });

    test('should generate "text-break" class when wordBreak is true', () => {
        const classNames = generateTypographyClassNames({ wordBreak: true });

        expect(classNames).toBe('text-break');
    });

    test('should generate multiple classes when multiple properties are provided', () => {
        const classNames = generateTypographyClassNames({
            fontSize: '3',
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'start' }
        });

        expect(classNames).toBe('fs-3 fw-bold text-center text-sm-start');
    });

    test('should return an empty string when no properties are provided', () => {
        const classNames = generateTypographyClassNames({});

        expect(classNames).toBe('');
    });
});
