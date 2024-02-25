declare class PasswordHandler {
    private saltRounds;
    constructor(saltRounds: number);
    hashPassword(password: string): string;
    comparePassword(password: string, hash: string): boolean;
}
declare const _default: PasswordHandler;
export default _default;
