"use client";

import { useState, useEffect } from "react";
import TrendingWidget from "./TrendingWidget";
import NewsletterSignup from "./NewsletterSignup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SidebarNews {
  id: string | number;
  title: string;
  image?: string;
  timestamp?: string;
  category?: string;
  views?: number;
  isBreaking?: boolean;
}

interface FetchedArticle {
  title: string;
  publishedAt: string;
  urlToImage?: string;
  source?: {
    name?: string;
  };
}

const Sidebar = () => {
  const [sidebarNews, setSidebarNews] = useState<SidebarNews[]>([]);

  const defaultNews: SidebarNews[] = [
    {
      id: "default-1",
      title: "এই খবরটি ডিফল্ট হিসেবে দেখানো হচ্ছে",
      image: "/placeholder.jpg",
      timestamp: "আজকের দিন",
      category: "সাধারণ",
      views: 0,
      isBreaking: true,
    },
  ];

  useEffect(() => {
    const fetchSidebarNews = async () => {
      try {
        const res = await fetch("/api/fetch-news?limit=6", { cache: "no-store" });
        const data = await res.json();

        if (data.articles?.length) {
          const items: SidebarNews[] = data.articles.slice(0, 6).map((a: FetchedArticle, i: number) => ({
            id: `${i}-${a.publishedAt}`,
            title: a.title,
            image: a.urlToImage || "/placeholder.jpg",
            timestamp: new Date(a.publishedAt).toLocaleTimeString("bn-BD", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            category: a.source?.name || "সাধারণ",
            views: Math.floor(Math.random() * 10000),
          }));

          setSidebarNews(items);
        } else {
          setSidebarNews(defaultNews);
        }
      } catch (err) {
        console.error("Sidebar fetch error:", err);
        setSidebarNews(defaultNews);
      }
    };

    fetchSidebarNews();
  }, []);

  return (
    <aside className="w-full space-y-6">
      <div className="bg-white border-l-4 border-news-red rounded-lg overflow-hidden shadow-sm">
        <div className="bg-news-red text-white p-3 text-center font-bengali font-semibold">
          <span className="w-2 h-2 bg-white rounded-full mr-2 inline-block animate-ping"></span>
          ব্রেকিং নিউজ
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-bengali font-semibold text-lg">সর্বশেষ খবর</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {sidebarNews.map((news) => (
            <div key={news.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex gap-3">
                <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={news.image!}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs font-bengali">
                      {news.category}
                    </Badge>
                    {news.isBreaking && (
                      <Badge className="bg-red-600 text-white text-xs font-bengali">
                        ব্রেকিং
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-sm font-bengali font-medium hover:text-news-red cursor-pointer transition-colors line-clamp-2 mb-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-meta-text">
                    <span className="font-bengali">{news.timestamp}</span>
                    <span className="font-english">
                      {news.views?.toLocaleString()} views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-50">
          <Button variant="outline" className="w-full font-bengali">
            আরও খবর
          </Button>
        </div>
      </div>

      {/* Widgets */}
      <TrendingWidget />
      <NewsletterSignup />
    </aside>
  );
};

export default Sidebar;
