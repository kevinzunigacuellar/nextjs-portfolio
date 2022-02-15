import useSWR from "swr";
import fetcher from "lib/fetcher";
import Spotify from "components/icons/Spotify";
import LoadingSpinner from "components/LoadingSpinner";
import { animate } from "motion";
import { useEffect } from "react";
interface Song {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function SpotifyPlayer() {
  const { data: song } = useSWR<Song>("/api/currently-playing", fetcher);
  if (!song)
    return (
      <LoadingSpinner className="ml-2 block h-4 w-auto animate-spin self-end" />
    );

  if (!song.isPlaying) return <NotPlaying />;

  return (
    <CurrentlyPlaying
      title={song.title}
      artist={song.artist}
      songUrl={song.songUrl}
    />
  );
}

function CurrentlyPlaying({
  title,
  artist,
  songUrl,
}: {
  title: string;
  artist: string;
  songUrl: string;
}) {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: ["scaleY(1.0)", "scaleY(0.6)", "scaleY(1.0)"],
      },
      {
        duration: 1.2,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar2",
      {
        transform: ["scaleY(0.5)", "scaleY(1.0)", "scaleY(0.5)"],
      },
      {
        delay: 0.2,
        duration: 1.2,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar3",
      {
        transform: ["scaleY(1.0)", "scaleY(0.5)", "scaleY(1.0)"],
      },
      {
        delay: 0.3,
        duration: 1.2,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar4",
      {
        transform: ["scaleY(0.6)", "scaleY(1.0)", "scaleY(0.6)"],
      },
      {
        delay: 0.4,
        duration: 1.2,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
  }, []);
  return (
    <div className="group flex items-center space-x-2">
      <div className="flex items-center space-x-0.5 rounded-md border border-gray-300 p-1 shadow-sm group-hover:shadow dark:border-gray-600">
        <span
          id="bar1"
          className="block h-5 w-1 rounded bg-indigo-500 dark:bg-cyan-500"
        ></span>
        <span
          id="bar2"
          className="block h-5 w-1 rounded bg-indigo-500 dark:bg-cyan-500"
        ></span>
        <span
          id="bar3"
          className="block h-5 w-1 rounded bg-indigo-500 dark:bg-cyan-500"
        ></span>
        <span
          id="bar4"
          className="block h-5 w-1 rounded bg-indigo-500 dark:bg-cyan-500"
        ></span>
      </div>
      <a
        className="flex flex-col text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
        href={songUrl}
      >
        <span className="font-semibold text-gray-900 group-hover:text-indigo-500 dark:text-white dark:group-hover:text-cyan-400">
          {title}
        </span>
        <span className="text-xs">{artist}</span>
      </a>
    </div>
  );
}

function NotPlaying() {
  return (
    <p className="flex max-w-xs items-center text-xs text-gray-600 dark:text-gray-400 sm:w-auto sm:text-sm">
      <Spotify className="mr-2 inline-block h-4 w-auto" />
      <span className="font-semibold text-gray-900 dark:text-white">
        Not Playing{" "}
      </span>
      <span className="mx-2">&#8212;</span>
      Spotify
    </p>
  );
}
