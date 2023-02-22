import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const todos = [
	{
		id: 1,
		title: 'manger le soir',
		time: '07:30',
		location: 'my home',
		frequency: 'daily'
	},
	{
		id: 2,
		title: 'coucher le bebe',
		time: '22:00',
		location: 'my home',
		frequency: 'daily'
	},
	{
		id: 3,
		title: 'manger le matin',
		time: '11:25',
		location: 'gym',
		frequency: 'weekly'
	},
	{
		id: 4,
		title: 'Designer affiche',
		time: '11:25',
		location: 'gym',
		frequency: 'monthly'
	},
	{
		id: 5,
		title: 'jouer',
		time: '11:25',
		location: 'restaurant',
		frequency: 'daily'
	},
];

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.topSection}>
				<View style={styles.topSectionRight}>
					<Text style={styles.topSectionTitle}>Aujourd'hui</Text>
					<Text style={styles.topSectionSubTitle}>Fevrier 20</Text>
					<AntDesign name="caretdown" style={styles.topSectionIcon} size={10} color="gray" />
				</View>
				<AntDesign name="search1" size={35} color="black" />
			</View>
			<View style={styles.bottomSection}>
				<FlatList
					data={todos}
					renderItem={(todo) => {
						<View>
							<AntDesign name="checkcircle" size={24} color="black" />
							<View>
								<Text>kbfskbgk</Text>
								<View>
									<Text>kbfskbgk</Text>
									<Entypo name="dot-single" size={24} color="black" />
									<Text>kbfskbgk</Text>
									<Entypo name="dot-single" size={24} color="black" />
									<Text>kbfskbgk</Text>
								</View>
							</View>
						</View>
					}}
					keyExtractor={todo => todos.id}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: 5,
	},
	topSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		borderBottomWidth: 0.4,
		borderBottomColor: 'gray'
	},
	topSectionRight: {
		flexDirection: 'row'
	},
	bottomSection: {
		flex: 9
	},
	topSectionTitle: {
		fontSize: 25,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		marginRight: 10
	},
	topSectionSubTitle: {
		fontSize: 22,
		marginEnd: 3
	},
	topSectionIcon: {
		alignSelf: 'center'
	}
});



