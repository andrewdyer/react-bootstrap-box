import generateResponsiveClasses from './generateResponsiveClasses';

describe('generateResponsiveClasses', () => {
    it('should generate class names with breakpoints, excluding "xs"', () => {
        expect(generateResponsiveClasses('d', { xs: 'none', sm: 'block' })).toEqual({
            'd-none': true,
            'd-sm-block': true
        });
    });

    it('should generate class names with a single value', () => {
        expect(generateResponsiveClasses('float', 'end')).toEqual({ 'float-end': true });
    });

    it('should return an empty object for undefined values', () => {
        expect(generateResponsiveClasses('float', undefined)).toEqual({});
    });
});
