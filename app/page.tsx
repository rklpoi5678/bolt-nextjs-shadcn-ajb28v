import LatestPosts from '@/components/LatestPosts';
import Comments from '@/components/Comments';
import BeautyInfo from '@/components/BeautyInfo';
import Tools from '@/components/Tools';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Gugu Blog</h1>
      
      <Tabs defaultValue="latest" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="latest">최신글 & 댓글</TabsTrigger>
          <TabsTrigger value="beauty-info">뷰티정보</TabsTrigger>
          <TabsTrigger value="tools">툴</TabsTrigger>
        </TabsList>
        <TabsContent value="latest">
          <div className="grid md:grid-cols-2 gap-8">
            <LatestPosts />
            <Comments />
          </div>
        </TabsContent>
        <TabsContent value="beauty-info">
          <BeautyInfo />
        </TabsContent>
        <TabsContent value="tools">
          <Tools />
        </TabsContent>
      </Tabs>
    </main>
  );
}