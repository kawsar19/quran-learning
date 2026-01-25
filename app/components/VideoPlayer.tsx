"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoId?: string;
  loomId?: string;
  jumpshareId?: string;
  title?: string;
}

export default function VideoPlayer({
  videoId,
  loomId,
  jumpshareId,
  title = "Lesson Video",
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  let videoSrc = "";
  let allowProps = "allowfullscreen";

  if (jumpshareId) {
    videoSrc = `https://jumpshare.com/embed/${jumpshareId}`;
  } else if (loomId) {
    videoSrc = `https://www.loom.com/embed/${loomId}`;
  } else if (videoId && videoId !== "VIDEO_ID_HERE") {
    videoSrc = `https://www.youtube.com/embed/${videoId}`;
    allowProps =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen";
  }

  if (!videoSrc) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <p className="text-gray-400 font-medium text-sm animate-pulse">
              ভিডিও লোড হচ্ছে...
            </p>
          </div>
        </div>
      )}

      {/* Video Iframe */}
      <iframe
        className={`w-full h-full transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src={videoSrc}
        title={title}
        onLoad={() => setIsLoading(false)}
        allow={allowProps}
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
