"use client"
import { useEffect, useRef } from 'react';

interface ShogiPlayerProps {
  kifContent: string;
}

const ShogiPlayer: React.FC<ShogiPlayerProps> = ({ kifContent }) => {
  const shogiPlayerRef = useRef(null);

  useEffect(() => {
    if (shogiPlayerRef.current) {
      shogiPlayerRef.current.addEventListener('ev_play_mode_move', (e) => {
        alert(e.detail[0].last_move_info.to_kif);
      });
    }
  }, []);

  return (
    <shogi-player-wc
      ref={shogiPlayerRef}
      sp_body={kifContent}
      sp_turn="0"
      sp_controller="true"
    ></shogi-player-wc>
  );
};

export default ShogiPlayer;
