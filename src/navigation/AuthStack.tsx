import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from '../screens/Location/LocationScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import SelectServiceScreen from '../screens/ServicePage/SelectServiceScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import { AuthStackNavigationType } from '../utils/types/NavigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from '../screens/BoardingScreen/BoardingScreen';
import SearchingScreen from '../screens/SearchingScreen/SearchingScreen';
import { BoardingSearching } from '../screens/BoardingSearchingResult/BoardingSearchingResult';
import MoreScreen from '../screens/MoreScreen/MoreScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingScreen';
import GeneralSettingsScreen from '../screens/GeneralSetting/GeneralSettingsScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import ContactAmericaScreen from '../screens/ContactAmerica';
import PetDetailsScreen from '../screens/PetDetails/PetDetailsScreen';
import YourPetScreen from '../screens/YourPets/YourPetScreen';
import InboxScreen from '../screens/Inbox/InboxScreen';
import AccountInfoScreen from '../screens/AccountInfo/AccountInfoScreen';
import AccountUpdatesScreen from '../screens/AccountInfo/AccountUpdatesScreen';
import BecomeSitterScreen from '../screens/BecomeSitter/BecomeSitterScreen';
import VelvetSupportScreen from '../screens/VelvetSupport/VelvetSupportScreen';
import InviteFriendScreen from '../screens/InviteFriend/InviteFriendScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

 const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'SignIn'}>
            <Stack.Screen name={'SignIn'} component={SignInScreen} />
            <Stack.Screen name={'SignUp'} component={SignUpScreen} />
            <Stack.Screen name={'Location'} component={LocationScreen} />
            <Stack.Screen name={'Onboarding'} component={OnboardingScreen} />
            <Stack.Screen name={'SelectService'} component={SelectServiceScreen} />
            <Stack.Screen name={'Boarding'} component={BoardingScreen} /> 
            <Stack.Screen name={'Searching'} component={SearchingScreen} />
            <Stack.Screen name={'BoardingSearch'} component={BoardingSearching} /> 
            <Stack.Screen name={'More'} component={MoreScreen} />   
            <Stack.Screen name={'Settings'} component={SettingsScreen} />
            <Stack.Screen name={'GeneralSettings'} component={GeneralSettingsScreen} />
            <Stack.Screen name={'Notification'} component={NotificationsScreen} />
            <Stack.Screen name={'ContactAmerica'} component={ContactAmericaScreen} />
            <Stack.Screen name={'PetDetails'} component={PetDetailsScreen} />
            <Stack.Screen name={'YourPet'} component={YourPetScreen} />
            <Stack.Screen name={'Inbox'} component={InboxScreen} />
            <Stack.Screen name={'AccountInfo'} component={AccountInfoScreen} />
            <Stack.Screen name={'AccountUpdates'} component={AccountUpdatesScreen} />
            <Stack.Screen name={'BecomeSitter'} component={BecomeSitterScreen} />
            <Stack.Screen name={'VelvetSupport'} component={VelvetSupportScreen} />
            <Stack.Screen name={'InviteFriend'} component={InviteFriendScreen} />
            <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})

