import generateVisualClassNames from './generateVisualClassNames';

describe('generateVisualClassNames', () => {
    test('should generate "align-middle" class when align is provided', () => {
        const classNames = generateVisualClassNames({ align: 'middle' });

        expect(classNames).toBe('align-middle');
    });

    test('should generate "bg-primary" class when background is provided', () => {
        const classNames = generateVisualClassNames({ background: 'primary' });

        expect(classNames).toBe('bg-primary');
    });

    test('should generate "text-primary" class when color is provided', () => {
        const classNames = generateVisualClassNames({ color: 'primary' });

        expect(classNames).toBe('text-primary');
    });

    test('should generate "bg-gradient" class when gradient is true', () => {
        const classNames = generateVisualClassNames({ gradient: true });

        expect(classNames).toBe('bg-gradient');
    });

    test('should generate "h-50" class when height is provided', () => {
        const classNames = generateVisualClassNames({ height: '50' });

        expect(classNames).toBe('h-50');
    });

    test('should generate "invisible" class when invisible is true', () => {
        const classNames = generateVisualClassNames({ invisible: true });

        expect(classNames).toBe('invisible');
    });

    test('should generate "opacity-50" class when opacity is provided', () => {
        const classNames = generateVisualClassNames({ opacity: '50' });

        expect(classNames).toBe('opacity-50');
    });

    test('should generate "overflow-hidden" class when overflow is provided', () => {
        const classNames = generateVisualClassNames({ overflow: 'hidden' });

        expect(classNames).toBe('overflow-hidden');
    });

    test('should generate "pe-none" class when pointerEvents is provided', () => {
        const classNames = generateVisualClassNames({ pointerEvents: 'none' });

        expect(classNames).toBe('pe-none');
    });

    test('should generate "rounded" class when radius is provided', () => {
        const classNames = generateVisualClassNames({ radius: 'rounded' });

        expect(classNames).toBe('rounded');
    });

    test('should generate "user-select-none" class when userSelect is provided', () => {
        const classNames = generateVisualClassNames({ userSelect: 'none' });

        expect(classNames).toBe('user-select-none');
    });

    test('should generate "visible" class when visible is true', () => {
        const classNames = generateVisualClassNames({ visible: true });

        expect(classNames).toBe('visible');
    });

    test('should generate "w-50" class when width is provided', () => {
        const classNames = generateVisualClassNames({ width: '50' });

        expect(classNames).toBe('w-50');
    });

    test('should return an empty string when no properties are provided', () => {
        const classNames = generateVisualClassNames({});

        expect(classNames).toBe('');
    });
});
