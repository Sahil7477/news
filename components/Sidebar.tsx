

import TrendingWidget from "./TrendingWidget";
import NewsletterSignup from "./NewsletterSignup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Thermometer, Wind } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const sidebarNews = [
    {
      id: 1,
      title: "কাজ রয়েছে বাজারে? নতুন চাকরির ক্ষেত্রে কী করবেন? এই পরামর্শ...",
      image: "/api/placeholder/150/100",
      timestamp: "১ ঘন্টা আগে",
      category: "চাকরি",
      views: 1250
    },
    {
      id: 2,
      title: "মা জে হান সেটি এসে সায়লেট মলিন চরিম ইইস্ট উইন্ডসরে জৃতি বাদনের",
      image: "/api/placeholder/150/100",
      timestamp: "২ ঘন্টা আগে",
      category: "আন্তর্জাতিক",
      views: 980
    },
    {
      id: 3,
      title: "Modi on Brambos and Pak: মূল ব্রারীন্স নিয়ে শঙ্কা পাক সেনার এনং",
      image: "/api/placeholder/150/100",
      timestamp: "৩ ঘন্টা আগে",
      category: "রাজনীতি",
      views: 2100,
      isBreaking: true
    },
    {
      id: 4,
      title: "কে হানের TMe জেসী হনূর নেই ব্রতচার্য পড়তীন পশ্চিমবঙ্গেন",
      image: "/api/placeholder/150/100",
      timestamp: "৪ ঘন্টা আগে",
      category: "পশ্চিমবঙ্গ",
      views: 675
    },
    {
      id: 5,
      title: "Janmashtami 2025 Date: কখন মি চৌচৌ মাইট মাহল আচটমেন্টচিড নিয়মন",
      image: "/api/placeholder/150/100",
      timestamp: "৫ ঘন্টা আগে",
      category: "ধর্ম",
      views: 1890
    },
    {
      id: 6,
      title: "যার সে রাজেই হলফ জাইনি নিহতিইন্ট অি নতিক নিবাইরেকা",
      image: "/api/placeholder/150/100",
      timestamp: "৬ ঘন্টা আগে",
      category: "খেলা",
      views: 540
    }
  ];

  const weatherData = {
    location: "কলকাতা",
    temperature: "৩২°C",
    condition: "আংশিক মেঘলা",
    humidity: "৭৮%",
    windSpeed: "১৫ কিমি/ঘন্টা"
  };

  const todaysEvents = [
    {
      time: "১০:০০ AM",
      event: "মুখ্যমন্ত্রীর সংবাদ সম্মেলন"
    },
    {
      time: "২:০০ PM", 
      event: "শেয়ার বাজার সপ্তাহিক পর্যালোচনা"
    },
    {
      time: "৬:০০ PM",
      event: "ভারত বনাম ইংল্যান্ড ম্যাচ আপডেট"
    }
  ];

  return (
    <aside className="w-full space-y-6">
      {/* Breaking News Header */}
      <div className="bg-white border-l-4 border-news-red rounded-lg overflow-hidden shadow-sm">
        <div className="bg-news-red text-white p-3">
          <h2 className="font-bengali font-semibold text-center flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
            ব্রেকিং নিউজ
          </h2>
        </div>
      </div>

      {/* Sidebar News List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-bengali font-semibold text-lg">সর্বশেষ খবর</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {sidebarNews.map((news) => (
            <div key={news.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex gap-3">
                <Image
                  src={news.image} 
                  alt={news.title}
                  className="w-20 h-16 object-cover rounded flex-shrink-0"
                />
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
                  <h4 className="text-sm font-bengali font-medium leading-tight hover:text-news-red cursor-pointer transition-colors line-clamp-2 mb-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-meta-text">
                    <span className="font-bengali">{news.timestamp}</span>
                    <span className="font-english">{news.views} views</span>
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

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bengali font-semibold flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            আবহাওয়া
          </h3>
          <Calendar className="w-4 h-4" />
        </div>
        
        <div className="text-center mb-4">
          <div className="text-2xl font-bold font-english">{weatherData.temperature}</div>
          <div className="text-sm font-bengali opacity-90">{weatherData.location}</div>
          <div className="text-sm font-bengali opacity-80">{weatherData.condition}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center">
            <Thermometer className="w-4 h-4 mr-2" />
            <span className="font-bengali">আর্দ্রতা: {weatherData.humidity}</span>
          </div>
          <div className="flex items-center">
            <Wind className="w-4 h-4 mr-2" />
            <span className="font-bengali">বায়ু: {weatherData.windSpeed}</span>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-bengali font-semibold mb-4 flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-news-red" />
          আজকের গুরুত্বপূর্ণ ঘটনা
        </h3>
        <div className="space-y-3">
          {todaysEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
              <div className="flex-shrink-0 w-16 text-xs font-english text-news-red font-medium">
                {event.time}
              </div>
              <div className="text-sm font-bengali">{event.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Widget */}
      <TrendingWidget />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Advertisement Space */}
      <div className="bg-gray-100 rounded-lg p-4 text-center border border-gray-200">
        <div className="text-meta-text text-sm font-english mb-2">Advertisement</div>
        <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-500 font-english">Ad Space 250x300</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-bengali font-semibold mb-4">দরকারি লিংক</h3>
        <div className="space-y-2">
          <a href="#" className="block text-sm font-bengali text-subheadline hover:text-news-red transition-colors">
            রেল টিকিট বুকিং
          </a>
          <a href="#" className="block text-sm font-bengali text-subheadline hover:text-news-red transition-colors">
            অনলাইন আবেদন
          </a>
          <a href="#" className="block text-sm font-bengali text-subheadline hover:text-news-red transition-colors">
            চাকরির খবর
          </a>
          <a href="#" className="block text-sm font-bengali text-subheadline hover:text-news-red transition-colors">
            পরীক্ষার ফলাফল
          </a>
          <a href="#" className="block text-sm font-bengali text-subheadline hover:text-news-red transition-colors">
            হেল্পলাইন নম্বর
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;