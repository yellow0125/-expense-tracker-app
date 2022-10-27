import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Color from './constants/Color'
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import IconButton from './components/UI/IconButton'
import AllScreen from './screens/AllScreen'
import ImportantScreen from './screens/ImportantScreen'
import AddScreen from './screens/AddScreen'
import EditScreen from './screens/EditScreen'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: Color.TitleBgc,
				},
				headerTintColor: Color.White,
				headerTitleAlign: 'center',
				tabBarStyle: {
					backgroundColor: Color.TitleBgc,
				},
				tabBarActiveTintColor: Color.Yellow,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={24}
						color={tintColor}
						onPress={() => {
							navigation.navigate('AddScreen');
						}}
					/>
				),
			})}
		>
			<BottomTabs.Screen
				name="AllScreen"
				component={AllScreen}
				options={{
					title: "All Expenses",
					tabBarLabel: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="attach-money" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="ImportantScreen"
				component={ImportantScreen}
				options={{
					title: "Important Expenses",
					tabBarLabel: "Important",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="exclamation" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	)
}
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					headerStyle: { backgroundColor: Color.TitleBgc },
					headerTintColor: Color.White,
					headerTitleAlign: 'center'
				}}>
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='EditScreen'
						component={EditScreen}
						options={{
							title: 'Edit Expense',
							presentation: "modal",
						}}
					/>
					<Stack.Screen
						name='AddScreen'
						component={AddScreen}
						options={{
							title: 'Add Expense',
							presentation: "modal",
						}}
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
