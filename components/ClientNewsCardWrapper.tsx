"use client";
import NewsCard from "./NewsCard";
import type { NewsCardProps } from "./NewsCard";

export default function ClientNewsCardWrapper(props: NewsCardProps) {
  return <NewsCard {...props} />;
}