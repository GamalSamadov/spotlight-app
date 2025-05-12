import { InitialLayout } from '@/components/initialLayout'
import { COLORS } from '@/constants/theme'
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
	throw new Error('Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env')
}

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
				<ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
					<InitialLayout />
				</ClerkProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
