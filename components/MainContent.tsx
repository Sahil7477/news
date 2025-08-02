"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Grid, List, Clock, TrendingUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const MainContent = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const mainStory = {
    id: 1,
    title:
      "২২ গজে শুভমন, দর্শকাসনে রোহিত! ওভালে লাঞ্চ বিরতির আগে দাপটে ভারত, স্কোর কত?",
    image: "https://picsum.photos/seed/main/600/400",
    description:
      "সদ্য তিনি নিয়েছেন টেস্ট থেকে অবসর। তা ঘিরে ক্রিকেটপ্রেমীদের কৌতূহল, প্রশ্ন, জল্পনা আজও চলছে! এরই মাঝে ভারত বনাম ইংল্যান্ড পঞ্চম টেস্টের রুদ্ধশ্বাস তৃতীয় দিনে ওভাল-এ রোহিত শর্মা।",
    timestamp: "Updated: 02 Aug 2025, 05:55 PM IST",
    category: "ক্রিকেট",
    views: 15420,
    likes: 284,
    comments: 56,
    isBreaking: true,
    isLive: true,
  };

  const secondaryNews = [
    {
      id: 2,
      title: "কাজের জায়গায় যৌন হয়রানি এবং এর প্রতিকার",
      image: "https://picsum.photos/seed/2/300/200",
      description: "কর্মক্ষেত্রে নারীদের নিরাপত্তা নিয়ে নতুন গাইডলাইন প্রকাশ",
      timestamp: "02 Aug 2025, 04:30 PM IST",
      category: "সমাজ",
      views: 8340,
      likes: 156,
      comments: 23,
      isBreaking: false,
    },
    {
      id: 3,
      title: "বিশ্বের সবচেয়ে বড় ক্রিকেট স্টেডিয়াম এখন ভারতে",
      image: "https://picsum.photos/seed/3/300/200",
      description: "নরেন্দ্র মোদি স্টেডিয়ামে ১,৩০,০০০ দর্শকের ধারণক্ষমতা",
      timestamp: "02 Aug 2025, 03:15 PM IST",
      category: "ক্রিকেট",
      views: 12850,
      likes: 298,
      comments: 67,
      isBreaking: false,
    },
    {
      id: 4,
      title: "নতুন শিক্ষানীতি: উচ্চশিক্ষায় কী পরিবর্তন আসছে?",
      image: "https://picsum.photos/seed/4/300/200",
      description:
        "ডিজিটাল যুগের সাথে তাল মিলিয়ে শিক্ষাব্যবস্থায় আমূল পরিবর্তন",
      timestamp: "02 Aug 2025, 02:45 PM IST",
      category: "শিক্ষা",
      views: 6770,
      likes: 145,
      comments: 34,
      isBreaking: false,
    },
    {
      id: 5,
      title: "স্বাস্থ্য বিমা: জানুন নতুন নিয়মকানুন",
      image: "https://picsum.photos/seed/5/300/200",
      description: "সরকারি স্বাস্থ্য বিমা প্রকল্পে নতুন সুবিধা যোগ",
      timestamp: "02 Aug 2025, 01:20 PM IST",
      category: "স্বাস্থ্য",
      views: 5490,
      likes: 89,
      comments: 12,
      isBreaking: false,
    },
    {
      id: 6,
      title: "রাজ্যে নতুন স্বাস্থ্য প্রকল্প চালু, বিনামূল্যে চিকিৎসা সেবা",
      image: "https://picsum.photos/seed/6/300/200",
      description: "গ্রামীণ এলাকায় স্বাস্থ্যসেবা পৌঁছে দিতে নতুন উদ্যোগ",
      timestamp: "02 Aug 2025, 12:30 PM IST",
      category: "স্বাস্থ্য",
      views: 4230,
      likes: 67,
      comments: 8,
      isBreaking: false,
    },
    {
      id: 7,
      title: "বাংলা সিনেমার নতুন তারকা, আন্তর্জাতিক পর্যায়ে সম্মাননা",
      image: "https://picsum.photos/seed/7/300/200",
      description: "কান চলচ্চিত্র উৎসবে বাংলা ছবির প্রশংসা",
      timestamp: "02 Aug 2025, 11:45 AM IST",
      category: "বিনোদন",
      views: 9560,
      likes: 234,
      comments: 45,
      isBreaking: false,
    },
    {
      id: 8,
      title: "কলকাতা মেট্রোর নতুন রুট উদ্বোধন আগামী সপ্তাহে",
      image: "https://picsum.photos/seed/8/300/200",
      description: "যাত্রীদের সুবিধার জন্য মেট্রো নেটওয়ার্ক সম্প্রসারণ",
      timestamp: "02 Aug 2025, 10:30 AM IST",
      category: "কলকাতা",
      views: 7890,
      likes: 178,
      comments: 29,
      isBreaking: false,
    },
  ];

  const categories = [
    { id: "all", name: "সব খবর", count: secondaryNews.length + 1 },
    { id: "cricket", name: "ক্রিকেট", count: 2 },
    { id: "health", name: "স্বাস্থ্য", count: 2 },
    { id: "society", name: "সমাজ", count: 1 },
    { id: "education", name: "শিক্ষা", count: 1 },
    { id: "entertainment", name: "বিনোদন", count: 1 },
    { id: "kolkata", name: "কলকাতা", count: 1 },
  ];

  const filteredNews =
    activeCategory === "all"
      ? secondaryNews
      : secondaryNews.filter((news) => {
          switch (activeCategory) {
            case "cricket":
              return news.category === "ক্রিকেট";
            case "health":
              return news.category === "স্বাস্থ্য";
            case "society":
              return news.category === "সমাজ";
            case "education":
              return news.category === "শিক্ষা";
            case "entertainment":
              return news.category === "বিনোদন";
            case "kolkata":
              return news.category === "কলকাতা";
            default:
              return true;
          }
        });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views;
      case "commented":
        return b.comments - a.comments;
      case "latest":
      default:
        return b.id - a.id;
    }
  });

  return (
    <main className="flex-1">
      {/* Main Story */}
      <section className="mb-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <NewsCard {...mainStory} isMainStory={true} />
        </div>
      </section>

      {/* Category Tabs */}
      <section className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <h2 className="text-2xl font-bengali font-bold mb-4 lg:mb-0 pb-2 border-b-2 border-news-red inline-block">
            Bengali News
          </h2>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="font-bengali">
                  <Filter className="w-4 h-4 mr-2" />
                  {sortBy === "latest"
                    ? "সর্বশেষ"
                    : sortBy === "popular"
                    ? "জনপ্রিয়"
                    : "আলোচিত"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem
                  onClick={() => setSortBy("latest")}
                  className="font-bengali"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  সর্বশেষ
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("popular")}
                  className="font-bengali"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  জনপ্রিয়
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("commented")}
                  className="font-bengali"
                >
                  আলোচিত
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-6"
        >
          <TabsList className="bg-gray-100 w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="font-bengali whitespace-nowrap data-[state=active]:bg-news-red data-[state=active]:text-white"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      {/* News Cards */}
      <section className="mb-8">
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              : "space-y-4"
          }`}
        >
          {sortedNews.map((news) => (
            <div
              key={news.id}
              className={`${
                viewMode === "list"
                  ? "bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex"
                  : "bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
              }`}
            >
              <NewsCard
                {...news}
                className={viewMode === "list" ? "flex" : ""}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Load More */}
      <div className="text-center">
        <Button className="bg-news-red hover:bg-news-red-dark text-white px-8 py-3 font-bengali">
          আরও খবর লোড করুন
        </Button>
      </div>

      {/* Related Articles */}
      <section className="mt-12 bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bengali font-bold mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-news-red" />
          আপনিও পড়তে পারেন
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryNews.slice(0, 3).map((news) => (
            <div
              key={`related-${news.id}`}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={300}
                height={150}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h4 className="font-bengali text-sm font-medium line-clamp-2 hover:text-news-red cursor-pointer">
                  {news.title}
                </h4>
                <div className="flex items-center justify-between mt-2 text-xs text-meta-text">
                  <Badge variant="secondary" className="font-bengali">
                    {news.category}
                  </Badge>
                  <span className="font-english">{news.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
