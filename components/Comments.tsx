import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comments = [
  { id: 1, author: "미나", content: "정말 유용한 정보네요! 감사합니다." },
  { id: 2, author: "지수", content: "이 제품 저도 써봤는데 정말 좋았어요." },
  { id: 3, author: "현우", content: "다음 포스트도 기대됩니다!" },
];

export default function Comments() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">최근 댓글</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{comment.author}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{comment.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}