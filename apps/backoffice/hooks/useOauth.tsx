import { useSignIn, useSignUp } from "@clerk/nextjs"

const useOauth = () => {
  const { signIn } = useSignIn()
  const { signUp, isLoaded } = useSignUp()
  if (!signIn || !signUp) {
    return {
      signInWithGoogle: null,
      isOauthLoaded: isLoaded
    }
  }
  const signInWithGoogle = () => {
    return signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/onboard"
    })
  }
  return {
    signInWithGoogle,
    isOauthLoaded: isLoaded
  }
}

export default useOauth
