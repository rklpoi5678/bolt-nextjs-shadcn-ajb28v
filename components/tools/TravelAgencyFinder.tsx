'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TravelAgencyFinder() {
  const [location, setLocation] = useState('');
  const [agencies, setAgencies] = useState([]);

  const handleSearch = async () => {
    // 실제로는 서버 사이드에서 API를 호출하거나 데이터베이스를 조회해야 합니다.
    // 여기서는 예시로 더미 데이터를 반환합니다.
    const dummyAgencies = [
      { name: '행복여행사', address: '서울시 강남구 123-45' },
      { name: '즐거운여행', address: '서울시 서초구 678-90' },
    ];
    setAgencies(dummyAgencies);
  };

  return (
    <div className="max-w-md mx-auto">
      <Input 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="지역을 입력하세요"
        className="mb-2"
      />
      <Button onClick={handleSearch} className="w-full mb-2">검색</Button>
      <div>
        {agencies.map((agency, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold">{agency.name}</h3>
            <p>{agency.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}