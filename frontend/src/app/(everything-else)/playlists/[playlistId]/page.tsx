'use client'

import ClassCard from '@/components/ui/ClassCard'
import { useFetch } from '@/hooks/useFetch'
import useGridResizer from '@/hooks/useGridResizer'
import Link from 'next/link'

interface PlaylistProps {
  params: { playlistId: number }
}

type Playlist = {
  id: number
  name: string
  classes: number
  imgUrl: string
}

type Lesson = {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function Playlist({ params }: PlaylistProps) {
  const url = `/playlists/${params.playlistId}`
  const { data: playlist } = useFetch<Playlist>(url)
  const { data: lessons } = useFetch<Lesson[]>('/classes')
  const [cols, gridRef] = useGridResizer<HTMLUListElement>(296)

  return (
    <div className="flex flex-col gap-14 px-8 pb-12 pt-4">
      <h1>{playlist?.name}</h1>
      <ul
        ref={gridRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
          gridTemplateRows: '1fr',
        }}
      >
        {lessons?.map((lesson) => (
          <li key={lesson.id}>
            <Link href="/home">
              <ClassCard
                lessonTitle={lesson.lessonTitle}
                course={lesson.course}
                duration={lesson.duration}
                module={lesson.module}
                imgUrl={lesson.imgUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
