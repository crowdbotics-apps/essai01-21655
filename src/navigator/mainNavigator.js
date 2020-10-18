import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps147569Navigator from '../features/Maps147569/navigator';
import Add-Item147568Navigator from '../features/Add-Item147568/navigator';
import Maps147564Navigator from '../features/Maps147564/navigator';
import UserProfile147560Navigator from '../features/UserProfile147560/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps147569: { screen: Maps147569Navigator },
Add-Item147568: { screen: Add-Item147568Navigator },
Maps147564: { screen: Maps147564Navigator },
UserProfile147560: { screen: UserProfile147560Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
