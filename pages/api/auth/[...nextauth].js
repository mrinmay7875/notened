import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  database: process.env.DB_URL,
  session: {jwt: true},
  jwt: {secret: process.env.JWT_SECRET}

})