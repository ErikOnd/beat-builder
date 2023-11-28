import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import process from 'process';


export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
      authorization: {
        url: 'https://accounts.spotify.com/authorize',
        params: { scope: 'playlist-modify-public' },
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
