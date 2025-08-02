
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, Eye,  } from "lucide-react";

interface TrendingNews {
  id: number;
  title: string;
  category: string;
  views: number;
  timeAgo: string;
  isRising?: boolean;
}

const TrendingWidget = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [trendingNews, setTrendingNews] = useState<TrendingNews[]>([
    {
      id: 1,
      title: "ভারত বনাম ইংল্যান্ড ৫ম টেস্টে রোহিত শর্মার অনুপস্থিতি",
      category: "ক্রিকেট",
      views: 15420,
      timeAgo: "২ ঘন্টা আগে",
      isRising: true
    },
    {
      id: 2,
      title: "পশ্চিমবঙ্গে আজ থেকে ভারী বৃষ্টির সম্ভাবনা",
      category: "আবহাওয়া",
      views: 12850,
      timeAgo: "৩ ঘন্টা আগে",
      isRising: true
    },
    {
      id: 3,
      title: "কেন্দ্রীয় বাজেটে নতুন ঘোষণা, মধ্যবিত্তদের জন্য সুখবর",
      category: "অর্থনীতি",
      views: 9670,
      timeAgo: "৪ ঘন্টা আগে"
    },
    {
      id: 4,
      title: "কলকাতা মেট্রোর নতুন রুট উদ্বোধন আগামী সপ্তাহে",
      category: "কলকাতা",
      views: 8340,
      timeAgo: "৫ ঘন্টা আগে"
    },
    {
      id: 5,
      title: "ফুটবল বিশ্বকাপের জন্য ভারতীয় দলের প্রস্তুতি",
      category: "ফুটবল",
      views: 7290,
      timeAgo: "৬ ঘন্টা আগে",
      isRising: true
    }
  ]);

  const [recentNews, setRecentNews] = useState<TrendingNews[]>([
    {
      id: 6,
      title: "রাজ্যে নতুন স্বাস্থ্য প্রকল্প চালু, বিনামূল্যে চিকিৎসা",
      category: "স্বাস্থ্য",
      views: 5420,
      timeAgo: "১৫ মিনিট আগে"
    },
    {
      id: 7,
      title: "প্রবাসী বাঙালিদের জন্য নতুন সুবিধা ঘোষণা",
      category: "প্রবাস",
      views: 4850,
      timeAgo: "৩০ মিনিট আগে"
    },
    {
      id: 8,
      title: "শিক্ষা ক্ষেত্রে ডিজিটাল বিপ্লব, নতুন অ্যাপ চালু",
      category: "শিক্ষা",
      views: 3670,
      timeAgo: "৪৫ মিনিট আগে"
    },
    {
      id: 9,
      title: "বাংলা সিনেমার নতুন তারকা, আন্তর্জাতিক পর্যায়ে সম্মাননা",
      category: "বিনোদন",
      views: 6340,
      timeAgo: "১ ঘন্টা আগে"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update view counts randomly
      setTrendingNews(prev => prev.map(news => ({
        ...news,
        views: news.views + Math.floor(Math.random() * 50)
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const NewsItem = ({ news }: { news: TrendingNews }) => (
    <div className="p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-b-0">
      <div className="flex items-start space-x-3">
        <div className="flex-1">
          <h4 className="font-bengali text-sm font-medium line-clamp-2 hover:text-news-red transition-colors">
            {news.title}
          </h4>
          
          <div className="flex items-center space-x-3 mt-2">
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
                <div className="absolute left-3 top-3 w-6 h-6 bg-news-red text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <div className="pl-12">
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