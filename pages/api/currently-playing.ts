import getCurrentlyPlaying from 'lib/spotify'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function currentlyPlaying(_req: NextApiRequest, res: NextApiResponse) {
  const response = await getCurrentlyPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }
  const data = await response.json()
  if (data.currently_playing_type !== 'track') {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = data.is_playing
  const title = data.item.name
  const artist = data.item.artists.map((_artist: { name: string }) => _artist.name).join(', ')
  const album = data.item.album.name
  const albumImageUrl = data.item.album.images[1].url
  const songUrl = data.item.external_urls.spotify
  return res.status(200).json({
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  })
}
