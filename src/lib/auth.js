import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Best practice: handle potential errors and edge cases.
      try {
        if (account.provider === 'google') {
          // 1. Ensure the user and email exist before proceeding.
          if (!user || !user.email) {
            console.error("Auth Error: User object or email is missing.");
            return false;
          }

          const email = user.email;

          // 2. Perform the domain and prefix checks.
          if (!email.endsWith('@iiit-bh.ac.in')) {
            console.log(`Access Denied: Email domain (${email}) is not valid.`);
            return '/access-denied?error=InvalidDomain'; // Redirect to a specific error page
          }

          const localPart = email.split('@')[0];
          if (!localPart.startsWith('b3')) {
            console.log(`Access Denied: Email prefix (${localPart}) is not a B3 student ID.`);
            return '/access-denied?error=InvalidStudentID'; // Redirect
          }

          // 3. If all checks pass, allow the sign-in.
          return true;
        }
      } catch (error) {
        console.error("Critical Error in signIn callback:", error);
        return false; // Prevent sign-in on any unexpected error
      }

      // Deny sign-in for any other provider or condition.
      return false;
    },
  },
  pages: {
    signIn: '/login',
    error: '/access-denied', // Fallback error page
  },
  secret: process.env.NEXTAUTH_SECRET,
};

