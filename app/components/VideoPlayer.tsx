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
  // Jumpshare video
  if (jumpshareId) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://jumpshare.com/embed/${jumpshareId}`}
          title={title}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    );
  }

  // Loom video
  if (loomId) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.loom.com/embed/${loomId}`}
          title={title}
          allowFullScreen
        />
      </div>
    );
  }

  // YouTube video
  if (videoId && videoId !== "VIDEO_ID_HERE") {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // No video placeholder
  return null;
}
