'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useSWR from 'swr';

const RSS_URL = 'https://moneyfarm.hatch100.xyz';

const fetcher = async (url) => {
  const res = await fetch(url);
  const text = await res.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'text/xml');
  const items = xml.querySelectorAll('item');
  return Array.from(items).map((item) => ({
    title: item.querySelector('title')?.textContent,
    link: item.querySelector('link')?.textContent,
    description: item.querySelector('description')?.textContent,
  }));
};

export default function BeautyInfo() {
  const { data: posts, error } = useSWR(RSS_URL, fetcher);

  if (error) return <div>RSS 피드를 불러오는 데 실패했습니다.</div>;
  if (!posts) return <div>로딩 중...</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">뷰티 정보</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
                더 읽기
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}