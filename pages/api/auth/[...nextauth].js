import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_AUTH_ID_KEY,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_AUTH_PW_KEY,
    }),
  ],
  secret : process.env.NEXT_PUBLIC_GITHUB_AUTH_JWT_SECERET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Ensure the URL is relative to the base URL
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Otherwise, ensure it is the same origin URL
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  }
};
export default NextAuth(authOptions); 