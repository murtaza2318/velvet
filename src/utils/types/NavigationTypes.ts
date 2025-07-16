export type RootStackNavigationType = {
    AuthStack: undefined,
  };
  
  export type AuthStackNavigationType = {
    SignIn: undefined,
    SignUp: undefined,
    LoginScreen: undefined,
    ForgetPassword: undefined,
    Location: undefined,
    Onboarding: undefined,
    SelectService: undefined,
    Boarding: undefined,
    Searching: { service: string },
    BoardingSearch: { service: string },
    More: undefined,
    Settings: undefined,
    GeneralSettings: undefined,
    Notification: undefined,
    ContactAmerica: undefined,
    PetDetails: undefined,
    YourPets: undefined,
    YourPet: undefined,
    Inbox: undefined,
    AccountInfo: undefined,
    AccountUpdates: undefined,
    BecomeSitter: undefined,
    VelvetSupport: undefined,
    ProfileScreen: { profileId: string }, // required by your code

    HouseSitting: undefined,
    DropinVisits: undefined,
    DogWalking: undefined,
    DoggyDayCare: undefined,
  };
  
  
  export type BottomTabNavigationType = {
    
  };