import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  { id: 1, title: "2024 봄 메이크업 트렌드", excerpt: "올 봄 유행할 메이크업 트렌드를 알아봅시다." },
  { id: 2, title: "피부 타입별 스킨케어 루틴", excerpt: "당신의 피부 타입에 맞는 최적의 스킨케어 루틴을 소개합니다." },
  { id: 3, title: "내추럴 메이크업의 비밀", excerpt: "자연스러운 메이크업을 위한 팁과 트릭" },
];

export default function LatestPosts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">최신 글</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}