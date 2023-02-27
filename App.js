import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyDate from './MyDate';
import Item from './Item';

const TODOS = [
	{
		id: 1,
		title: 'manger le soir',
		time: '07:30',
		location: 'my home',
		frequency: 'daily',
		isFinished: true
	},
	{
		id: 2,
		title: 'coucher le bebe',
		time: '22:00',
		location: 'my home',
		frequency: 'daily',
		isFinished: false
	},
	{
		id: 3,
		title: 'manger le matin',
		time: '11:25',
		location: 'gym',
		frequency: 'weekly',
		isFinished: true
	},
	{
		id: 4,
		title: 'Designer affiche',
		time: '11:25',
		location: 'gym',
		frequency: 'monthly',
		isFinished: false
	},
	{
		id: 5,
		title: 'jouer',
		time: '11:25',
		location: 'restaurant',
		frequency: 'daily',
		isFinished: false
	},
];


export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.topSection}>
				<View style={styles.topSectionRight}>
					<Text style={styles.topSectionTitle}>Aujourd'hui</Text>
					<MyDate />
					<AntDesign name="caretdown" style={styles.topSectionIcon} size={10} color="gray" />
				</View>
				<AntDesign name="search1" size={35} color="black" />
			</View>
			<View style={styles.bottomSection}>
				<FlatList
					data={TODOS}
					renderItem={({ item }) =>
						<Item data={item} action={'bonjour'} />
					}
					keyExtractor={item => item.id}
				/>
			</View>
			<View style={styles.inputSection}>
				<TextInput
					style={styles.inputContainer}
					placeholder={'Ajouter une tache'}
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
	topSectionTitle: {
		fontSize: 25,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		marginRight: 10
	},
	topSectionIcon: {
		alignSelf: 'center'
	},
	bottomSection: {
		flex: 8,
		margin: 20
	},
	inputSection: {
		flex: 1,
		marginBottom: 5,
		justifyContent: 'center',
	},
	inputContainer: {
		borderWidth: 2,
		borderColor: 'gray',
		height: 50,
		borderRadius: 15,
		paddingHorizontal: 20,
	}
});



