import {
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Repeat2,
  SquarePlay,
  Layers,
  MonitorSpeaker,
  PictureInPicture2,
  Maximize2,
  Volume1,
} from "lucide-react"
import { Button } from "./ui/button"
import { Slider } from "@/components/ui/slider"

export default function Player() {
  return (
    <footer className="h-14 md:h-20 fixed bottom-[70px] md:bottom-0 left-0 w-[calc(100%-16px)] md:w-full bg-zinc-800 md:bg-black px-4 py-3 flex justify-between mx-2 rounded-md">
      <div className="w-full md:w-1/4 flex items-center">
        <img src="/img/1.png" className="h-full rounded-sm" />
        <div className="ml-4">
          <h4 className="text-sm">Song Name</h4>
          <h5 className="text-xs text-gray-400">Author</h5>
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        <div className="flex items-center justify-center gap-5 mb-1">
          <Shuffle size={18} className="cursor-pointer text-zinc-400 hover:text-white" />
          <SkipBack fill="white" size={18} className="cursor-pointer text-zinc-400 hover:text-white" />
          <Button variant="outline" size="icon" className="rounded-full bg-white w-8 h-8">
            <Play fill="black" />
          </Button>
          <SkipForward fill="white" size={18} className="cursor-pointer text-zinc-400 hover:text-white" />
          <Repeat2 className="cursor-pointer text-zinc-400 hover:text-white" />
        </div>
        <div className="flex items-center">
          <span className="text-xs">1:00</span>
          <Slider defaultValue={[30]} max={100} step={1} className="mx-3" />
          <span className="text-xs">3:30</span>
        </div>
      </div>
      <div className="hidden md:flex w-1/4 items-center justify-end gap-3">
        <SquarePlay size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
        <Layers size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
        <MonitorSpeaker size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
        <div className="flex items-center gap-1">
          <Volume1 size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
          <Slider defaultValue={[30]} max={100} step={1} className="w-[70px]" />
        </div>
        <PictureInPicture2 size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
        <Maximize2 size={15} className="cursor-pointer text-zinc-400 hover:text-white" />
      </div>
      <Button variant="outline" size="icon" className="rounded-full bg-white w-8 h-8 justify-self-end md:hidden">
        <Play fill="black" />
      </Button>
    </footer>
  )
}