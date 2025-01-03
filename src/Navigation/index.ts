import  type { NavigatorScreenParams } from "@react-navigation/native";
export type RootStackParamList = {
  mainLogin: undefined;
  mobileLogin: undefined;
  verifyOtp: {phone?: string; otpConfirmData?: null; screen?: string; email?: string};
  emailLogin: undefined;
  mobileSignUp: undefined;
  username: undefined;
  addDetails: undefined;
  emailSignUp: undefined;
  forgotScreen: undefined;
  createPassword: undefined;
  successMessage: undefined;
  bottomTab:NavigatorScreenParams<BottomTabParamList>
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  List: undefined;
  Message: undefined;
  Profile: undefined; 
};
