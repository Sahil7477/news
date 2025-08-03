import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent.server"
import BreakingNewsTicker from "@/components/BreakingNewsTicker"

interface Props {
  searchParams: {
    category?: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BreakingNewsTicker />
      <main className="flex flex-1 container mx-auto">
        <MainContent  />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}
