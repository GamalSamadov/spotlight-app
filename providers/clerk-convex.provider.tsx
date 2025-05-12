import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { PropsWithChildren } from 'react'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
	throw new Error('Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env')
}

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
	unsavedChangesWarning: false,
})

export default function ClerkWithConvexProvider({
	children,
}: PropsWithChildren) {
	return (
		<ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
			<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
				<ClerkLoaded>{children}</ClerkLoaded>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}
