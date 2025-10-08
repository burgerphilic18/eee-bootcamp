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
      if (user) {
        token.email = user.email;
        const { data: student } = await supabase
          .from('students')
          .select('id')
          .eq('email', user.email)
          .single();
        
        token.isNewUser = !student;
      }

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
      session.user.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/access-denied',
  },
  secret: process.env.NEXTAUTH_SECRET,
};