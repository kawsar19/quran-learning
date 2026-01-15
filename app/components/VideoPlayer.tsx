interface VideoPlayerProps {
  videoId: string
  title?: string
}

export default function VideoPlayer({ videoId, title = 'Lesson Video' }: VideoPlayerProps) {
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
  )
}
