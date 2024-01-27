import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = 10;

class PasswordHandler {
  constructor(private saltRounds: number) {}
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.saltRounds);
  }
  comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}

export default new PasswordHandler(SALT_ROUNDS);
