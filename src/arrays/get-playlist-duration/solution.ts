function playlistDuration(playlist: string[][]): string {
  const totalSeconds = playlist.reduce((sum, [, duration]) => {
    const [seconds, minutes, hours = 0] = duration
      .split(":")
      .map(Number)
      .reverse();
    return sum + hours * 3600 + minutes * 60 + seconds;
  }, 0);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
}
