import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import React from 'react'
import { Platform, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons';
// import LaunchScreen from '../Containers/LaunchScreen'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'
import ComponentExamplesScreen from '../../ignite/DevScreens/ComponentExamplesScreen'
import PluginExamplesScreen from '../../ignite/DevScreens/PluginExamplesScreen'
import ThemeScreen from '../../ignite/DevScreens/ThemeScreen'
import styles from './Styles/NavigationStyles'

const Colors = {
  bottomTabBlurred: '#ccc',
  bottomTabSelected: '#3e243f',
};

const HomeTab = TabNavigator(
  {
    Home: { screen: PresentationScreen },
    Component: { screen: ComponentExamplesScreen },
    Plugin: { screen: PluginExamplesScreen },
    More: { screen: ThemeScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName, control;
        switch (routeName) {
          case 'Home':
            iconName = `ios-home${focused ? '' : '-outline'}`;
            break;
          case 'Component':
            iconName = `ios-photos${focused ? '' : '-outline'}`;
            break;
          case 'Plugin':
            iconName = `ios-bulb${focused ? '' : '-outline'}`;
            break;
          case 'More':
            iconName = `ios-menu${focused ? '' : '-outline'}`;
        }
        return (
          <View>
            <Icons
              name={iconName}
              size={28}
              style={{ marginBottom: 0, }}
              color={focused ? Colors.bottomTabSelected : Colors.bottomTabBlurred}
            />
          </View>
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    lazy: false,

    tabBarOptions: {
      activeTintColor: Colors.bottomTabSelected,
      style: { paddingBottom: 5, height: 60, backgroundColor: '#fbfbfb', borderTopColor: '#ececec', }
    },
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeTab: { screen: HomeTab }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeTab',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
