import { useRef, useEffect } from 'react'

interface FadingVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
}

export default function FadingVideo({ src, className = '', style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const handleLoaded = () => {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.style.transition = 'opacity 0.5s ease'
          videoRef.current.style.opacity = '1'
        }
      })
    }

    video.addEventListener('loadeddata', handleLoaded)
    return () => video.removeEventListener('loadeddata', handleLoaded)
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  )
}
