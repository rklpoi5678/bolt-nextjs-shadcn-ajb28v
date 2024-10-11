'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NaverPlaceScoreCalculator() {
  const [reviews, setReviews] = useState('');
  const [blogPosts, setBlogPosts] = useState('');
  const [score, setScore] = useState(null);

  const handleCalculate = () => {
    // 이 계산 로직은 예시입니다. 실제 네이버의 점수 계산 방식과는 다를 수 있습니다.
    const reviewScore = parseInt(reviews) * 0.7;
    const blogScore = parseInt(blogPosts) * 0.3;
    const totalScore = reviewScore + blogScore;
    setScore(totalScore.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto">
      <Input 
        value={reviews} 
        onChange={(e) => setReviews(e.target.value)} 
        placeholder="리뷰 수"
        type="number"
        className="mb-2"
      />
      <Input 
        value={blogPosts} 
        onChange={(e) => setBlogPosts(e.target.value)} 
        placeholder="블로그 포스트 수"
        type="number"
        className="mb-2"
      />
      <Button onClick={handleCalculate} className="w-full mb-2">점수 계산</Button>
      {score !== null && <div>예상 점수: {score}</div>}
    </div>
  );
}