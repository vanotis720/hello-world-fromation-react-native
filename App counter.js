import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';



export default function App() {

	const [count, setCount] = useState(0);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<TouchableOpacity
				style={styles.action}
				onPress={() => {
					setCount(count + 1);
				}}
			>
				<Text style={styles.actionText}> Cliquez ici pour jouer</Text>
			</TouchableOpacity>
			<View style={styles.numberSection}>
				<Text style={styles.numberSectionText}>
					{count}
				</Text>
			</View>

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingTop: 15,
		paddingHorizontal: 15
	},
	action: {
		backgroundColor: 'green',
		padding: 20,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	actionText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	},
	numberSection: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 200
	},
	numberSectionText: {
		fontSize: 50,
		color: 'red'
	}
});



