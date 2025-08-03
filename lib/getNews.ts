export interface NewsArticle {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export async function getNews(): Promise<NewsArticle[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    console.error("NEWS_API_KEY not found in environment.");
    return [];
  }

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=বাংলা&sortBy=publishedAt&language=bn&pageSize=10&apiKey=${apiKey}`
  );

  const data = await res.json();
  console.log("📰 Server Fetched news data:", data);

  if (!res.ok || !data.articles) {
    return [];
  }

  return data.articles;
}