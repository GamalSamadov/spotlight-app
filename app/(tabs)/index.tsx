import { styles } from '@/styles/auth.styles'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Edit app/index.tsx to edit this screen.</Text>
			<TouchableOpacity onPress={() => alert('Hello world!')}>
				<Text>Press me</Text>
			</TouchableOpacity>

			{/* Direct local image */}
			<Image
				source={require('@/assets/images/icon.png')}
				style={{ width: 100, height: 100 }}
			/>

			{/* Image from another uri */}
			<Image
				source={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6EKOJWVBk536qCfbBS8vxDEIA2zY7kwJmg&s',
				}}
				style={{ width: 200, height: 200 }}
			/>

			<Link href='/profile'>Profile screen</Link>
			<Link href='/notifications'>Notifications screen</Link>
		</View>
	)
}
