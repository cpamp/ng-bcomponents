export class IdentifierFactory {
    private static getKey = (): string => {
        var key = new Date().getTime();
        if(window != null && window.crypto != null && typeof window.crypto.getRandomValues === 'function') {
            var array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            key += array[0];
        } else {
            key += Math.random();
        }
        return key.toString();
    }

    public static getIdentifier = (): string => {
        // 32 bit FNV-1a hash
        // Ref.: http://isthe.com/chongo/tech/comp/fnv/
        var key: string = IdentifierFactory.getKey();
        var FNV1_32A_INIT = 0x811c9dc5;
        var hval = FNV1_32A_INIT;
        for ( var i = 0; i < key.length; ++i )
        {
            hval ^= key.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        return (hval >>> 0).toString();
    }

    public static getSelector = (identifier: string): string => {
        return "#" + identifier;
    }
}