import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllScreen from './screens/AllScreen'
import ImportantScreen from './screens/ImportantScreen'
import Color from './constants/Color'

export default function App() {
	const Stack = createNativeStackNavigator()
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: Color.TitleBgc },
						headerTintColor: Color.White,
						headerTitleAlign: 'center'
					}}>
					<Stack.Screen
						name='All Expenses'
						component={AllScreen} />
					<Stack.Screen
						name='Important Expenses'
						component={ImportantScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" backgroundColor={Color.TitleBgc} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
