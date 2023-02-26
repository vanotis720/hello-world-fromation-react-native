import { View, Text, StyleSheet, FlatList, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.topSection}>
				<Text style={styles.topSectionTitle}>Get Started</Text>
			</View>
			<View style={styles.imageSection}>
				<Image source={require('./assets/undraw_Mobile_posts_re_bpuw.png')} style={styles.image} />
			</View>
			<View style={styles.bottomSection}>
				<View style={styles.bottomSectionTopContainer}>
					<Text style={styles.topContainerTitle}>Tract job pro</Text>
					<Text style={styles.topContainerSubTitle}>get the job instantly based on your need</Text>
				</View>
				<View style={styles.bottomSectionAction}>
					<TouchableOpacity
						onPress={() => {
							alert('go to signin');
						}}
						style={styles.buttonSignUp}
					>
						<Text style={styles.buttonSignUpStyle}>Sign Up</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.bottomSectionEndContainer}>
					<Text>
						Already have an account?
					</Text>
					<TouchableOpacity
						onPress={() => {
							alert('go to login')
						}}
					>
						<Text style={{ fontWeight: 'bold' }}> Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	topSection: {
		flex: 1,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	topSectionTitle: {
		fontWeight: 'bold',
		fontSize: 16
	},
	imageSection: {
		flex: 3,
		borderColor: '#ff00ee',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '75%',
		height: '75%',
		resizeMode: 'contain'
	},
	bottomSection: {
		flex: 2,
		borderColor: 'green'
	},
	bottomSectionTopContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	topContainerTitle: {
		fontWeight: 'bold',
		fontSize: 22,
		textTransform: 'capitalize'
	},
	topContainerSubTitle: {
		fontSize: 16,
		textTransform: 'capitalize'
	},
	bottomSectionAction: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomSectionEndContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	buttonSignUp: {
		backgroundColor: '#3B793B',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonSignUpStyle: {
		color: '#fff',
		fontWeight: '800',
		fontSize: 18
	},
});



