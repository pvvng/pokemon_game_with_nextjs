import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_AUTH_ID_KEY,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_AUTH_PW_KEY,
    }),
  ],
  secret : process.env.NEXT_PUBLIC_GITHUB_AUTH_JWT_SECERET
};
export default NextAuth(authOptions); 