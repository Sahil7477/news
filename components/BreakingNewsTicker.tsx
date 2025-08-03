"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap } from "lucide-react";

interface LiveUpdate {
  id: number;
  text: string;
  time: string;
}

interface Article {
  title: string;
  publishedAt: string;
}

const defaultUpdates: LiveUpdate[] = [
  {
    id: 1,
    text: "ভারত বনাম ইংল্যান্ড ৫ম টেস্ট: ওভালে শুভমনের শতক, ভারত এগিয়ে",
    time: "২ মিনিট আগে",
  },
  {
    id: 2,
    text: "পশ্চিমবঙ্গে আজ থেকে ভারী বৃষ্টির সম্ভাবনা, আবহাওয়া দপ্তরের সতর্কতা",
    time: "৫ মিনিট আগে",
  },
  {
    id: 3,
    text: "কলকাতা মেট্রোতে নতুন রুট চালু, যাত্রীদের সুবিধা বৃদ্ধি",
    time: "১০ মিনিট আগে",
  },
  {
    id: 4,
    text: "রাজ্যে নতুন স্বাস্থ্য প্রকল্প ঘোষণা, বিনামূল্যে চিকিৎসা সেবা",
    time: "১৫ মিনিট আগে",
  },
];

const BreakingNewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liveUpdates, setLiveUpdates] = useState<LiveUpdate[]>([]);

  // Fetch breaking news or fallback to default
  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const res = await fetch("/api/fetch-breaking-news");
        const data = await res.json();
        const items: LiveUpdate[] =
          data?.articles?.slice(0, 4)?.map((item: Article, i: number) => ({
            id: i + 1,
            text: item.title,
            time: "এইমাত্র",
          })) || [];

        setLiveUpdates(items.length ? items : defaultUpdates);
      } catch (err) {
        console.error("❌ Failed to fetch breaking news:", err);
        setLiveUpdates(defaultUpdates);
      }
    };

    fetchBreakingNews();
  }, []);

  // Auto-scroll ticker
  useEffect(() => {
    if (!liveUpdates.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveUpdates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [liveUpdates]);

  return (
    <div className="bg-news-red text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Label */}
          <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
            <Badge className="bg-white text-news-red font-bengali font-bold animate-pulse">
              <Zap className="w-3 h-3 mr-1" />
              ব্রেকিং
            </Badge>
            <div className="hidden md:flex items-center text-sm">
              <Clock className="w-3 h-3 mr-1" />
              <span className="font-bengali">লাইভ আপডেট</span>
            </div>
          </div>

          {/* News carousel */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${liveUpdates.length * 100}%`,
              }}
            >
              {liveUpdates.map((update) => (
                <div key={update.id} className="w-full flex-shrink-0 px-2">
                  <div className="flex items-center justify-between whitespace-nowrap">
                    <span className="font-bengali text-sm md:text-base font-medium truncate">
                      {update.text}
                    </span>
                    <span className="text-xs ml-4 flex-shrink-0 font-bengali opacity-80">
                      {update.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex space-x-1 ml-4 flex-shrink-0">
            {liveUpdates.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
