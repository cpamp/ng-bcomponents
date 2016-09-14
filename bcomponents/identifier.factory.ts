const numTokens = 8;
export class IdentifierFactory {
    private static getToken = (): string => {
        return Math.random().toString(36).substr(2);
    }

    public static getIdentifier = (): string => {
        var result = '';
        for(var i = 0; i < numTokens; i++) {
            result += IdentifierFactory.getToken();
        }
        return result;
    }

    public static getSelector = (identifier: string): string => {
        return "#" + identifier;
    }
}