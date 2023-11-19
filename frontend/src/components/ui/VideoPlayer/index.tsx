import dynamic from 'next/dynamic'

export default function VideoPlayer() {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

  return (
    <div className="relative max-h-96 max-w-2xl flex-1">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={false}
        url="https://www.youtube.com/watch?v=RV327Xr2X74"
      />
    </div>
  )
}
