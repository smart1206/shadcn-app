import { Card } from "./ui/card"

export default function SongCard() {
  return (
    <Card className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-md cursor-pointer">
      <img src="/img/1.png" className="w-full rounded-sm" />
      <h3 className="text-md font-bold mt-4">Song Name</h3>
      <span className="text-sm text-gray-400">Author</span>
    </Card>
  )
}