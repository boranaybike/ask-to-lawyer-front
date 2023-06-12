const TokenService = {
    getToken(): string | null {
      if (typeof window !== 'undefined') {
        const localToken = localStorage.getItem('user');
        return localToken;
      }
      return null;
    },
    saveToken(token: string): void {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', token);
      }
    },
    removeToken(): void {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
    }
  };
  
  export default TokenService;
  