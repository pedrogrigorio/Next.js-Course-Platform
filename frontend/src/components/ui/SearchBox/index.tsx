import { Search } from 'lucide-react'

export default function SearchBox() {
  return (
    <div className="flex w-[600px] items-center gap-2 rounded-xl bg-white bg-opacity-10 px-4 py-2">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 border-none bg-white bg-opacity-0 text-sm outline-none placeholder:text-gray-300"
      />
      <div>
        <Search size={16} color="#808191" />
      </div>
    </div>
  )
}
