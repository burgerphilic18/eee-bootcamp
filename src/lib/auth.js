import GoogleProvider from 'next-auth/providers/google';
import { supabase } from '@/lib/supabaseClient';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        if (!user.email.endsWith('@iiit-bh.ac.in') || !user.email.startsWith('b3')) {
          return '/access-denied';
        }
      }
      return true;
    },

    async jwt({ token, user, trigger }) {
      // This block runs only on initial sign-in
      if (user) {
        token.email = user.email; // Persist email in the token
        const { data: student } = await supabase
          .from('students')
          .select('id')
          .eq('email', user.email)
          .single();
        
        token.isNewUser = !student;
      }

      // This block runs on session updates
      if (trigger === "update") {
          const { data: student } = await supabase
            .from('students')
            .select('id')
            .eq('email', token.email)
            .single();

          token.isNewUser = !student;
      }
      
      return token;
    },

    async session({ session, token }) {
      session.isNewUser = token.isNewUser;
      session.user.email = token.email; // Ensure email is always in the session
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/access-denied',
  },
  secret: process.env.NEXTAUTH_SECRET,
};