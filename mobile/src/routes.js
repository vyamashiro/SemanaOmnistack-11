import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNatigator } from '@react-navigation/stack';

const AppStack = createStackNatigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}