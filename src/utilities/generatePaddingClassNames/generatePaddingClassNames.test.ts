import generatePaddingClassNames from './generatePaddingClassNames';

describe('generatePaddingClassNames', () => {
    test('should generate "p-auto" class when padding is provided', () => {
        const classNames = generatePaddingClassNames({ padding: 'auto' });

        expect(classNames).toBe('p-auto');
    });

    test('should generate responsive padding classes when responsive padding is provided', () => {
        const classNames = generatePaddingClassNames({ padding: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('p-auto p-sm-0');
    });

    test('should generate "pt-auto" class when paddingTop is provided', () => {
        const classNames = generatePaddingClassNames({ paddingTop: 'auto' });

        expect(classNames).toBe('pt-auto');
    });

    test('should generate responsive paddingTop classes when responsive paddingTop is provided', () => {
        const classNames = generatePaddingClassNames({ paddingTop: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('pt-auto pt-sm-0');
    });

    test('should generate "pb-auto" class when paddingBottom is provided', () => {
        const classNames = generatePaddingClassNames({ paddingBottom: 'auto' });

        expect(classNames).toBe('pb-auto');
    });

    test('should generate responsive paddingBottom classes when responsive paddingBottom is provided', () => {
        const classNames = generatePaddingClassNames({ paddingBottom: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('pb-auto pb-sm-0');
    });

    test('should generate "ps-auto" class when paddingLeft is provided', () => {
        const classNames = generatePaddingClassNames({ paddingLeft: 'auto' });

        expect(classNames).toBe('ps-auto');
    });

    test('should generate responsive paddingLeft classes when responsive paddingLeft is provided', () => {
        const classNames = generatePaddingClassNames({ paddingLeft: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('ps-auto ps-sm-0');
    });

    test('should generate "pe-auto" class when paddingRight is provided', () => {
        const classNames = generatePaddingClassNames({ paddingRight: 'auto' });

        expect(classNames).toBe('pe-auto');
    });

    test('should generate responsive paddingRight classes when responsive paddingRight is provided', () => {
        const classNames = generatePaddingClassNames({ paddingRight: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('pe-auto pe-sm-0');
    });

    test('should generate "px-auto" class when paddingX is provided', () => {
        const classNames = generatePaddingClassNames({ paddingX: 'auto' });

        expect(classNames).toBe('px-auto');
    });

    test('should generate responsive paddingX classes when responsive paddingX is provided', () => {
        const classNames = generatePaddingClassNames({ paddingX: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('px-auto px-sm-0');
    });

    test('should generate "py-auto" class when paddingY is provided', () => {
        const classNames = generatePaddingClassNames({ paddingY: 'auto' });

        expect(classNames).toBe('py-auto');
    });

    test('should generate responsive paddingY classes when responsive paddingY is provided', () => {
        const classNames = generatePaddingClassNames({ paddingY: { xs: 'auto', sm: '0' } });

        expect(classNames).toBe('py-auto py-sm-0');
    });

    test('should return an empty string when no properties are provided', () => {
        const classNames = generatePaddingClassNames({});

        expect(classNames).toBe('');
    });
});
