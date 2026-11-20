'use client'

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    >
      <source src="/video-home.webm" type="video/webm" />
      <source src="/video-home.mp4" type="video/mp4" />
    </video>
  )
}