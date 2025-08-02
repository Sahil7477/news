"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
// Update the path below to the correct relative location if needed
import { useToast } from "../hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "ইমেইল প্রয়োজন",
        description: "অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা প্রদান করুন",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "সফলভাবে সাবস্ক্রাইব হয়েছে!",
        description: "আপনি নিয়মিত সর্বশেষ খবর পাবেন আপনার ইমেইলে",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-bengali font-semibold text-green-800 mb-2">
          ধন্যবাদ!
        </h3>
        <p className="text-green-700 font-bengali text-sm">
          আপনি সফলভাবে আমাদের নিউজলেটারে সাবস্ক্রাইব করেছেন
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-news-red to-red-600 text-white rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 mr-2" />
        <h3 className="text-lg font-bengali font-semibold">
          নিউজলেটার সাবস্ক্রাইব করুন
        </h3>
      </div>
      
      <p className="text-sm font-bengali mb-4 opacity-90">
        সর্বশেষ খবর এবং আপডেট সরাসরি আপনার ইমেইলে পান
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="আপনার ইমেইল ঠিকানা"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-gray-900 border-0 font-bengali"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          className="w-full bg-white text-news-red hover:bg-gray-100 font-bengali"
          disabled={isLoading}
        >
          {isLoading ? "সাবস্ক্রাইব হচ্ছে..." : "সাবস্ক্রাইব করুন"}
        </Button>
      </form>
      
      <p className="text-xs font-bengali mt-3 opacity-75">
        আমরা আপনার ইমেইল কোনো তৃতীয় পক্ষের সাথে শেয়ার করি না
      </p>
    </div>
  );
};

export default NewsletterSignup;