'use client'

import { useEffect } from "react"
import { useTheme } from "next-themes"
import Player from "@/components/player"
import MainContent from "@/components/main-content"
import RightSidebar from "@/components/right-sidebar"
import { LeftSidebar, MobileMenu} from "@/components/left-sidebard"

export default function HomePage() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  return (
    <>
      <div className="p-2 flex gap-2 h-[calc(100vh-126px)] md:h-[calc(100vh-80px)]">
        <div className="w-[350px] h-full shrink-0 hidden md:block">
          <LeftSidebar />
        </div>
        <div className="h-full grow">
          <MainContent />
        </div >
        <div className="w-[300px] shrink-0 h-full hidden xl:block">
          <RightSidebar />
        </div>
      </div>
      <Player />
      <MobileMenu />
    </>
  )
}
