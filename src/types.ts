export type User = {
  id: number;
  username: string;
};

export type AuthResponse = {
  token: string;
  message: string;
  user: User;
};

export type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  signup: (username: string, password: string) => void;
};
