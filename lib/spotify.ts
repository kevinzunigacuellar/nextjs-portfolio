import querystring from "querystring";

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing?market=ES`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const getCurrentlyPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
