/* global jasmine, describe, it, expect, beforeEach, afterEach */

var proxyquire = require('proxyquireify')(require);

var jsonEscape = proxyquire('../index.js', { });

var nativeEscape = function(string) {
    return JSON.stringify(string).slice(1, -1);
};


describe('jsonEscape test', function() {

    it('Should be a function', function() {
        expect(typeof jsonEscape).toBe('function');
    });

    it('Should return original string if no escapable characters are in it', function() {
        expect(jsonEscape('')).toBe('');
        expect(jsonEscape("'")).toBe("'");
        expect(jsonEscape('aB1@#$%^&*()_+{}|:>?<~`.,')).toBe('aB1@#$%^&*()_+{}|:>?<~`.,');
    });

    it('Should return escaped string if escapable characters are in it', function() {
        expect(jsonEscape('"')).toBe('\\"');
        expect(jsonEscape('{ "something": "dupa" }')).toBe('{ \\"something\\": \\"dupa\\" }');
    });

    it('Should return escaped string if escapable characters are in it and they are escaped', function() {
        expect(jsonEscape('{ \"something\": \"dupa\" }')).toBe('{ \\"something\\": \\"dupa\\" }');
    });
    
    it('Should produce the same results as native JSON.stringify implementation', function() {
        expect([
            '',
            ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~',
            '{ "something": "\\something\\", "\'anotherProp\'": "\"anotherProp\"" }'
        ].every(function(example) {
            return (jsonEscape(example) === nativeEscape(example));
        })).toBe(true);
    });

});