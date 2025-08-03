"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, Eye } from "lucide-react";

interface TrendingNews {
  id: number;
  title: string;
  category: string;
  views: number;
  timeAgo: string;
  imageUrl?: string;
  isRising?: boolean;
}

const TrendingWidget = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [trendingNews, setTrendingNews] = useState<TrendingNews[]>([]);
  const [recentNews, setRecentNews] = useState<TrendingNews[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/fetch-news"); // Replace with your actual route
        const data = await res.json();
        const articles = data.articles || [];

        const mappedNews = articles.map((article: any, idx: number) => ({
          id: idx + 1,
          title: article.title,
          category: article.source.name || "সাধারণ",
          views: Math.floor(Math.random() * 10000) + 1000,
          timeAgo: "১ ঘন্টা আগে", // You can calculate real timeAgo if needed
          imageUrl: article.urlToImage,
          isRising: idx < 3,
        }));

        setTrendingNews(mappedNews.slice(0, 5));
        setRecentNews(mappedNews.slice(5, 10));
      } catch (err) {
        console.error("Error fetching trending news:", err);
      }
    };

    fetchNews();
  }, []);

  const NewsItem = ({ news }: { news: TrendingNews }) => (
    <div className="p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-b-0">
      <div className="flex items-start space-x-3">
        {news.imageUrl && (
          <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-bengali text-sm font-medium line-clamp-2 hover:text-news-red transition-colors">
            {news.title}
          </h4>
          <div className="flex items-center flex-wrap space-x-3 mt-2">
            <Badge variant="secondary" className="text-xs font-bengali">
              {news.category}
            </Badge>
            <div className="flex items-center space-x-1 text-xs text-meta-text">
              <Eye className="w-3 h-3" />
              <span className="font-english">{news.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-meta-text">
              <Clock className="w-3 h-3" />
              <span className="font-bengali">{news.timeAgo}</span>
            </div>
          </div>
        </div>
        {news.isRising && (
          <div className="flex-shrink-0">
            <Badge className="bg-green-100 text-green-800 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              জনপ্রিয়
            </Badge>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="bg-gray-50 border-b border-gray-200">
          <TabsList className="w-full bg-transparent border-0 rounded-none h-auto p-0">
            <TabsTrigger
              value="trending"
              className="flex-1 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-news-red rounded-none font-bengali"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              ট্রেন্ডিং
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="flex-1 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-news-red rounded-none font-bengali"
            >
              <Clock className="w-4 h-4 mr-2" />
              সাম্প্রতিক
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="trending" className="mt-0">
          <div className="max-h-96 overflow-y-auto">
            {trendingNews.map((news, index) => (
              <div key={news.id} className="relative">
                <div className="absolute left-3 top-3 w-6 h-6 bg-news-red text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                  {index + 1}
                </div>
                <div className="pl-10">
                  <NewsItem news={news} />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-0">
          <div className="max-h-96 overflow-y-auto">
            {recentNews.map((news) => (
              <NewsItem key={news.id} news={news} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-3 bg-gray-50 border-t">
        <Button variant="outline" className="w-full font-bengali text-sm">
          আরও দেখুন
        </Button>
      </div>
    </div>
  );
};

export default TrendingWidget;
