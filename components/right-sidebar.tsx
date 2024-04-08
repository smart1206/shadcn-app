import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export default function RightSidebar() {
  return (
    <Card className="h-full">
      <ScrollArea className="h-full p-4">
        <h3 className="text-md font-bold text-gray-400 mb-4">Pop Mix</h3>
        <img src="/img/1.png" className="w-full rounded-sm" />
        <h2 className="text-lg font-bold mt-2">Your top mixes</h2>
        <h3 className="text-md font-bold text-gray-400 mb-4">Wet log</h3>
        <img src="/img/1.png" className="w-full rounded-sm" />
      </ScrollArea>
    </Card>
  )
}