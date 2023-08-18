const keyPhrase = process.env.KEY_PHRASE;

const isAuthenticated = () => {
  let savedKeyPhrase;
  if (typeof window !== 'undefined') {
    savedKeyPhrase = localStorage.getItem("keyPhrase");
  }
  return savedKeyPhrase === keyPhrase;
};

const login = (keyPhrase) => {
  if (keyPhrase === keyPhrase) {
    localStorage.setItem("keyPhrase", keyPhrase);
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("keyPhrase");
};

export { isAuthenticated, login, logout };