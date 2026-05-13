"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  async function handlePlay() {
    if (!audioRef.current) return;

    try {
      audioRef.current.volume = volume;
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Erro ao executar o áudio:", error);
    }
  }

  function handlePause() {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }

  return (
    <main className="container">
      <section className="player-card">
        <div className="tag">Next.js Audio Player</div>

        <h1>Hatsune Miku Audio Player</h1>

        <p>
          Aplicação desenvolvida em Next.js para executar, pausar e controlar o
          volume de um áudio.
        </p>

        <div className="cover">
          <span>🎵</span>
        </div>

        <audio
          ref={audioRef}
          src="/audio/miku.mp3"
          preload="auto"
          onEnded={() => setIsPlaying(false)}
        />

        <div className="controls">
          <button type="button" onClick={handlePlay} className="play-button">
            ▶ Executar
          </button>

          <button type="button" onClick={handlePause} className="pause-button">
            ⏸ Pausar
          </button>
        </div>

        <div className="volume-area">
          <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>

          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <div className="status">
          Status: {isPlaying ? "Áudio em execução" : "Áudio pausado"}
        </div>
      </section>
    </main>
  );
}