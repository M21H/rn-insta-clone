import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import IconSvgAvatar from '../../assets/icons/bottomtab/Avatart';
import IconSvgHome from '../../assets/icons/bottomtab/Home';
import IconSvgReels from '../../assets/icons/bottomtab/Reels';
import IconSvgSearch from '../../assets/icons/bottomtab/Search';
import IconSvgShop from '../../assets/icons/bottomtab/Shop';
import HomeScreen from '../../screens/HomeScreen';
import {SearchScreen} from '../../screens/SearchScreen';
import {Screens} from '../screens/Screens';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <IconSvgHome focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{tabBarIcon: () => <IconSvgSearch />}}
      />
      <Tab.Screen
        name={Screens.VIDEO}
        component={SearchScreen}
        options={{tabBarIcon: () => <IconSvgReels />}}
      />
      <Tab.Screen
        name={Screens.NOTIFICATION}
        component={SearchScreen}
        options={{tabBarIcon: () => <IconSvgShop />}}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={SearchScreen}
        options={{tabBarIcon: () => <IconSvgAvatar />}}
      />
    </Tab.Navigator>
  );
};
