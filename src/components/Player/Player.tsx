import Hls, { type HlsConfig } from "hls.js";
import type { FC, VideoHTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

export interface PlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  hlsConfig?: HlsConfig;
  src: string;
}

export const Player: FC<PlayerProps> = ({
  hlsConfig,
  src,
  autoPlay,
  ...props
}) => {
  const [supported, setSupported] = useState(false);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let hls: Hls;
    function _initPlayer() {
      if (hls != null) {
        hls.destroy();
      }
      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      });

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(src);
        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            playerRef?.current
              ?.play()
              .catch(() =>
                console.log(
                  "Unable to autoplay prior to user interaction with the dom."
                )
              );
          }
        });
      });
      newHls.on(Hls.Events.ERROR, function (event, data) {
        //eslint-ignore-next-line prettier/prettier
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError();
              break;
            default:
              _initPlayer();
              break;
          }
        }
      });

      if (playerRef.current != null) {
        newHls.attachMedia(playerRef.current);
      }

      hls = newHls;
    }

    if (Hls.isSupported()) {
      _initPlayer();
      setSupported(true);
    }
    return () => {
      if (hls != null) {
        hls.destroy();
      }
    };
  }, [autoPlay, hlsConfig, playerRef, src]);
  return supported ? (
    <video ref={playerRef} src={src} {...props} />
  ) : (
    <video ref={playerRef} src={src} autoPlay={autoPlay} {...props} />
  );
};
