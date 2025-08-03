import { getNews } from "@/lib/getNews";
import ClientNewsCardWrapper from "./ClientNewsCardWrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, Clock, Grid, List, TrendingUp } from "lucide-react";

export default async function MainContent() {
  const news = await getNews();
  const mainStory = news[0];
  const secondaryNews = news.slice(1);

  if (!news.length) {
    return (
      <main className="p-8 text-center">
        <p className="text-xl text-gray-500 font-bengali">কোনও খবর পাওয়া যায়নি</p>
      </main>
    );
  }

  return (
    <main className="flex-1">
      {/* Main Story */}
      <section className="mb-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <ClientNewsCardWrapper
            id={0}
            title={mainStory.title}
            image={mainStory.urlToImage}
            description={mainStory.description}
            timestamp={new Date(mainStory.publishedAt).toLocaleString("bn-BD", {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour12: true,
            })}
            category={mainStory.source?.name || "সাধারণ"}
            views={Math.floor(Math.random() * 10000)}
            likes={Math.floor(Math.random() * 300)}
            comments={Math.floor(Math.random() * 80)}
            isMainStory={true}
            isBreaking={true}
          />
        </div>
      </section>

      {/* Filters */}
      <section className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <h2 className="text-2xl font-bengali font-bold mb-4 lg:mb-0 pb-2 border-b-2 border-news-red inline-block">
            Bengali News
          </h2>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="font-bengali">
                  <Filter className="w-4 h-4 mr-2" />
                  সর্বশেষ
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem className="font-bengali">
                  <Clock className="w-4 h-4 mr-2" />
                  সর্বশেষ
                </DropdownMenuItem>
                <DropdownMenuItem className="font-bengali">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  জনপ্রিয়
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <Button variant="default" size="sm" className="rounded-none">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-none">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs value="all" className="mb-6">
          <TabsList className="bg-gray-100 w-full justify-start overflow-x-auto">
            <TabsTrigger
              value="all"
              className="font-bengali data-[state=active]:bg-news-red data-[state=active]:text-white"
            >
              সব খবর
              <Badge variant="secondary" className="ml-2 text-xs">
                {news.length}
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      {/* Secondary News */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {secondaryNews.map((item, index) => (
            <ClientNewsCardWrapper
              key={index}
              id={index + 1}
              title={item.title}
              image={item.urlToImage}
              description={item.description}
              timestamp={new Date(item.publishedAt).toLocaleString("bn-BD", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour12: true,
              })}
              category={item.source?.name || "সাধারণ"}
              views={Math.floor(Math.random() * 10000)}
              likes={Math.floor(Math.random() * 300)}
              comments={Math.floor(Math.random() * 100)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

