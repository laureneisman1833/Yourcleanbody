import { asset } from './assets';

export function playWellnessClubChime() {
  const audio = new Audio(asset('/sounds/diamond_tunes-harmony-haven-soft-intro-logo-179986.mp3'));
  audio.volume = 0.6;
  audio.play().catch(() => {
    // Autoplay restrictions may block it on some browsers; fails silently
  });
}
