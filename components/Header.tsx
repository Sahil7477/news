"use client";


import { Search, Menu, Facebook, Twitter, ChevronDown, Bell, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
 

  const navigationItems = [
    { 
      name: "এক নজরে সব খবর", 
      href: "#",
      dropdown: ["সদ্য প্রকাশিত", "জনপ্রিয়", "আলোচিত"]
    },
    { 
      name: "জাতীয়", 
      href: "#",
      dropdown: ["রাজনীতি", "অর্থনীতি", "সমাজ", "শিক্ষা"]
    },
    { 
      name: "ক্রিকেট", 
      href: "#",
      dropdown: ["ভারতীয় ক্রিকেট", "আন্তর্জাতিক", "আইপিএল", "লাইভ স্কোর"]
    },
    { 
      name: "বিশ্বের চুক", 
      href: "#",
      dropdown: ["এশিয়া", "ইউরোপ", "আমেরিকা", "আফ্রিকা"]
    },
    { 
      name: "ভারতের", 
      href: "#",
      dropdown: ["দিল্লি", "মুম্বাই", "পাঞ্জাব", "অন্যান্য রাজ্য"]
    },
    { 
      name: "ফুটবলের মাঠান", 
      href: "#",
      dropdown: ["প্রিমিয়ার লিগ", "লা লিগা", "ইন্ডিয়ান ফুটবল"]
    },
    { 
      name: "বাংলার মুখ", 
      href: "#",
      dropdown: ["কলকাতা", "উত্তরবঙ্গ", "দক্ষিণবঙ্গ", "পূর্ববঙ্গ"]
    },
    { 
      name: "বিনোদন", 
      href: "#",
      dropdown: ["বলিউড", "টলিউড", "টিভি", "ওটিটি"]
    },
    { 
      name: "লাইফস্টাইল", 
      href: "#",
      dropdown: ["স্বাস্থ্য", "ভ্রমণ", "ফ্যাশন", "খাবার"]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality
    }
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-white border-b border-border-light sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-50 py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs text-meta-text">
          <div className="flex space-x-4">
            <span className="font-bengali">নতুন খবর</span>
            <span className="hidden md:inline font-bengali">ব্রেকিং নিউজ</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" className="w-6 h-6 p-1">
                <Facebook className="w-3 h-3 text-blue-600" />
              </Button>
              <Button size="icon" variant="ghost" className="w-6 h-6 p-1">
                <Twitter className="w-3 h-3 text-blue-400" />
              </Button>
            </div>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-xs">
                  <Globe className="w-3 h-3 mr-1" />
                  বাংলা
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem className="font-bengali">বাংলা</DropdownMenuItem>
                <DropdownMenuItem className="font-english">English</DropdownMenuItem>
                <DropdownMenuItem className="font-english">हिंदी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-xs">
                  <User className="w-3 h-3 mr-1" />
                  Sign In
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem className="font-bengali">সাইন ইন</DropdownMenuItem>
                <DropdownMenuItem className="font-bengali">রেজিস্টার</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-bengali">আমার অ্যাকাউন্ট</DropdownMenuItem>
                <DropdownMenuItem className="font-bengali">সেটিংস</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="font-english hidden md:inline">Saturday, 2 August 2025</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-white z-50">
              <div className="py-4">
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      <a href={item.href} className="block py-2 font-bengali font-medium hover:text-news-red">
                        {item.name}
                      </a>
                      {item.dropdown && (
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a key={subIndex} href="#" className="block py-1 text-sm font-bengali text-subheadline hover:text-news-red">
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-1 lg:flex-none lg:text-center">
            <div className="text-center">
              <div className="text-2xl font-bold">
                <span className="font-english text-gray-600">Sangbad</span>
                
              </div>
              <div className="text-3xl font-bold news-red font-bengali">Bangla</div>
            </div>
          </div>

          {/* Search and notifications */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <Input 
                  placeholder="খবর খুঁজুন..." 
                  className="w-48 font-bengali"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Button type="submit" size="icon" variant="ghost" className="absolute right-1 top-1 h-6 w-6">
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </div>
            
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className="relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-news-red rounded-full text-white text-xs flex items-center justify-center">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 w-80">
                <div className="p-3 border-b">
                  <h3 className="font-bengali font-semibold">সর্বশেষ আপডেট</h3>
                </div>
                <DropdownMenuItem className="p-3">
                  <div className="font-bengali text-sm">
                    <div className="font-medium">নতুন খবর আপডেট</div>
                    <div className="text-meta-text">২ মিনিট আগে</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3">
                  <div className="font-bengali text-sm">
                    <div className="font-medium">ব্রেকিং নিউজ</div>
                    <div className="text-meta-text">৫ মিনিট আগে</div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="icon" variant="ghost" className="md:hidden">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-border-light">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex space-x-1 overflow-x-auto py-2">
            <a href="#" className="flex items-center space-x-1 py-2 px-3 text-sm font-bengali whitespace-nowrap hover:text-news-red border-b-2 border-news-red bg-news-accent rounded-t">
              <span>🏠</span>
            </a>
            {navigationItems.map((item, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="py-2 px-3 text-sm font-bengali whitespace-nowrap hover:text-news-red h-auto">
                    {item.name}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {item.dropdown?.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} className="font-bengali">
                      {subItem}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </nav>

      {/* Sub navigation */}
      <div className="bg-news-accent border-t border-border-light">
        <div className="container mx-auto px-4 py-2">
          <div className="flex space-x-6 text-xs font-bengali overflow-x-auto">
            <a href="#" className="hover:text-news-red whitespace-nowrap">বিশেষ প্রতিবেদন</a>
            <a href="#" className="hover:text-news-red flex items-center whitespace-nowrap">
              <span className="bg-news-red text-white px-1 mr-1 text-xs rounded">নতুন</span>
              আজকের টক্সোনার
            </a>
            <a href="#" className="hover:text-news-red whitespace-nowrap">সোনার প্রয়</a>
            <a href="#" className="hover:text-news-red whitespace-nowrap">ক্রিকেট লাইভ স্কোর</a>
            <a href="#" className="hover:text-news-red whitespace-nowrap">আবহাওয়া</a>
            <a href="#" className="hover:text-news-red whitespace-nowrap">শেয়ার বাজার</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;