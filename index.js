module.exports = (function() {
    
    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var emptyString = '';
    
    return function jsonEscape(string) {
        escapable.lastIndex = 0;

        if(escapable.test(string)) {
            var escaped = JSON.stringify(string);
            
            return escaped.substring(1, escaped.length - 1);
        } else {
            return (string + emptyString);
        }
    };
    
})();
