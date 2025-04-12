import Link from "next/link";
export default function HomePage() {
  return (
<div className="min-h-screen w-full flex items-center justify-center">
  <main className="text-center max-w-xl">
    <h1 className="text-5xl font-extrabold mb-6 drop-shadow">Welcome to MySite</h1>
    <p className="text-lg mb-8">
      ここにキャッチコピーやサービス概要などを表示すると、トップページらしくなります。
    </p>
    <Link href="/1" className="text-blue-600 font-semibold py-3 px-6 rounded-full shadow border hover:border-gray-100 transition-colors">
      ブログ一覧へ
    </Link>
  </main>
</div>
  );
}
