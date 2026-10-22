import { SiteNav } from "@/components/site-nav"
import "@/components/site-chrome.css"

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteNav />
      {children}
    </>
  )
}
