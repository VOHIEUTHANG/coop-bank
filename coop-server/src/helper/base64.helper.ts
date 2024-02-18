class Base64Helper {
  isBase64(str: string): boolean {
    return str?.startsWith('data:');
  }
}

export default new Base64Helper();
