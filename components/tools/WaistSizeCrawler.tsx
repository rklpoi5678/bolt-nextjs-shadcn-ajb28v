'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaistSizeCrawler() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const handleCrawl = async () => {
    setResult('크롤링 중...');
    try {
      // 실제로는 서버 사이드에서 크롤링을 수행해야 합니다.
      // 여기서는 예시로 더미 데이터를 반환합니다.
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResult('허리 사이즈: 30인치');
    } catch (error) {
      setResult('크롤링 실패');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Input 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="상품 URL을 입력하세요"
        className="mb-2"
      />
      <Button onClick={handleCrawl} className="w-full mb-2">크롤링 시작</Button>
      <div>{result}</div>
    </div>
  );
}