import { Share2, MessageCircle, Heart, Bookmark, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  image?: string;
  description?: string;
  timestamp?: string;
  category?: string;
  isMainStory?: boolean;
  isBreaking?: boolean;
  isLive?: boolean;
  views?: number;
  likes?: number;
  comments?: number;
  className?: string;
  id?: string | number;
}

const NewsCard = ({ 
  title, 
  image, 
  description, 
  timestamp, 
  category = "সাধারণ",
  isMainStory = false,
  isBreaking = false,
  isLive = false,
  views = 0,
  likes = 0,
  comments = 0,
  className = "",
  
}: NewsCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <article className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 ${className}`}>
      {image && (
        <div className={`relative ${isMainStory ? 'aspect-video' : 'aspect-[4/3]'} overflow-hidden group`}>
          <Image
            src={image} 
            alt={title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isBreaking && (
              <Badge className="bg-red-600 text-white font-bengali animate-pulse">
                ব্রেকিং
              </Badge>
            )}
            {isLive && (
              <Badge className="bg-red-600 text-white font-bengali animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full mr-1 animate-ping"></span>
                লাইভ
              </Badge>
            )}
            <Badge variant="secondary" className="font-bengali bg-black/70 text-white">
              {category}
            </Badge>
          </div>

          {/* Reading time estimate */}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-black/70 text-white font-english text-xs">
              <Clock className="w-3 h-3 mr-1" />
              ৩ মিনিট
            </Badge>
          </div>
        </div>
      )}
      
      <div className={`${image ? 'p-4' : 'p-3'}`}>
        {/* Category and timestamp */}
        <div className="flex items-center justify-between mb-2">
          {!image && (
            <div className="flex gap-2">
              {isBreaking && (
                <Badge className="bg-red-600 text-white font-bengali text-xs">
                  ব্রেকিং
                </Badge>
              )}
              {isLive && (
                <Badge className="bg-red-600 text-white font-bengali text-xs">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-ping"></span>
                  লাইভ
                </Badge>
              )}
            </div>
          )}
          {timestamp && (
            <div className="news-meta text-meta-text">
              {timestamp}
            </div>
          )}
        </div>

        <h3 className={`news-headline mb-3 hover:text-news-red cursor-pointer transition-colors line-clamp-3 ${
          isMainStory ? 'text-xl md:text-2xl' : 'text-sm md:text-base'
        }`}>
          {title}
        </h3>
        
        {description && (
          <p className="text-subheadline text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Engagement bar */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-meta-text text-xs">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span className="font-english">{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3" />
              <span className="font-english">{comments}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`p-1 h-auto ${isLiked ? 'text-red-500' : 'text-meta-text'} hover:text-red-500`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="ml-1 text-xs font-english">{likeCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1 h-auto ${isBookmarked ? 'text-blue-500' : 'text-meta-text'} hover:text-blue-500`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 h-auto text-meta-text hover:text-gray-600">
                  <Share2 className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem onClick={() => handleShare('facebook')} className="font-bengali">
                  Facebook এ শেয়ার করুন
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('twitter')} className="font-bengali">
                  Twitter এ শেয়ার করুন
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('whatsapp')} className="font-bengali">
                  WhatsApp এ শেয়ার করুন
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('copy')} className="font-bengali">
                  লিংক কপি করুন
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;