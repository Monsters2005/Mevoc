export type User = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  langLearning: string;
  langNative: string;
  location: string;
  settings: {
    safety: {
      twoFactAuth: {
        textMessage: boolean;
        authApp: boolean;
      };
    };
  };
};
