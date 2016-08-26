export class IdentifierFactory {
    private static getToken = (): string => {
        return Math.random().toString(36).substr(2);
    }

    public static getIdentifier = (): string => {
        return IdentifierFactory.getToken() + IdentifierFactory.getToken();
    }

    public static getSelector = (identifier: string): string => {
        return "#" + identifier;
    }
}