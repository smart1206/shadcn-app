import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"
import SongCard from "./song-card"

export default function MainContent() {
  return (
    <Card className="h-full bg-gradient-to-b from-sky-900 from-[50px] to-card to-[150px]">
      <ScrollArea className="h-full p-4">
        <div className="flex justify-between mb-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <ChevronRight />
            </Button>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="/img/1.png" alt="@shadcn" />
            </Avatar>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Good morning</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
          {
            Array.from({ length: 6 }, (_, i) => i).map((idx) =>
              <div className="bg-zinc-700 hover:bg-zinc-800 rounded-sm flex items-center w-full overflow-hidden cursor-pointer" key={`top-${idx}`}>
                <img src="/img/1.png" className="w-16 h-16 shrink-0" />
                <span className="font-bold ml-4 text-sm">The Get Up</span>
              </div>
            )
          }
        </div>
        <div className="mt-7 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Recently Played</h2>
          <Button variant="link" className="text-gray-400 text-xs">Show all</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            Array.from({ length: 4 }, (_, i) => i).map((idx) =>
              <SongCard key={`recent-${idx}`} />
            )
          }
        </div>
        <div className="mt-7 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Your top mixes</h2>
          <Button variant="link" className="text-gray-400 text-xs">Show all</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            Array.from({ length: 8 }, (_, i) => i).map((idx) =>
              <SongCard key={`top-${idx}`} />
            )
          }
        </div>
      </ScrollArea>
    </Card>
  )
}