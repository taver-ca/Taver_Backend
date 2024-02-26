import { AccessToken, SpotifyApi } from '@spotify/web-api-ts-sdk';

const api = () => {
  return SpotifyApi.withClientCredentials(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET,
  );
};

export const getToken = async (code: string, code_verifier: string) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: process.env.TAVER_REDIRECT_URI,
      code_verifier: code_verifier,
    }),
  };
  console.log(payload.body);
  const body = await fetch('https://accounts.spotify.com/api/token', payload);
  const response = await body.json();
  if (body.status == 200) {
    return response;
  }
  console.log(`${response.error} ${response.error_description}`);
  throw new Error(`${response.error} ${response.error_description}`);
};

export const userApi = async (access_token: AccessToken) => {
  return SpotifyApi.withAccessToken(
    process.env.SPOTIFY_CLIENT_ID,
    access_token,
  );
};
export default api;
