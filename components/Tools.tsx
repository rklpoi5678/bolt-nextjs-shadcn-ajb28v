'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calculator from './tools/Calculator';
import WaistSizeCrawler from './tools/WaistSizeCrawler';
import TravelAgencyFinder from './tools/TravelAgencyFinder';
import NaverPlaceScoreCalculator from './tools/NaverPlaceScoreCalculator';

export default function Tools() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">툴</h2>
      <Tabs defaultValue="calculator">
        <TabsList>
          <TabsTrigger value="calculator">계산기</TabsTrigger>
          <TabsTrigger value="waistSize">옷 허리사이즈 크롤링</TabsTrigger>
          <TabsTrigger value="travelAgency">오프라인 여행사 조회</TabsTrigger>
          <TabsTrigger value="naverScore">네이버 플레이스 점수계산기</TabsTrigger>
        </TabsList>
        <TabsContent value="calculator">
          <Calculator />
        </TabsContent>
        <TabsContent value="waistSize">
          <WaistSizeCrawler />
        </TabsContent>
        <TabsContent value="travelAgency">
          <TravelAgencyFinder />
        </TabsContent>
        <TabsContent value="naverScore">
          <NaverPlaceScoreCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}