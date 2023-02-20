import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.topSection}>
				<View style={styles.topSectionRight}>
					<Text style={styles.topSectionTitle}>Aujourd'hui</Text>
					<Text>Fevrier 20</Text>
					<AntDesign name="caretdown" size={16} color="black" />
				</View>
				<AntDesign name="search1" size={24} color="black" />
			</View>

			<View style={styles.bottomSection}>

			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		marginTop: 40
	},
	topSection: {
		backgroundColor: 'yellow',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	topSectionRight: {
		flexDirection: 'row'
	},
	bottomSection: {
		backgroundColor: 'blue',
		flex: 9
	},
	topSectionTitle: {
		fontSize: 18
	}
});



