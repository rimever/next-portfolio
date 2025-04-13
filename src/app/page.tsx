/**
 * Next.jsのLinkコンポーネントをインポート
 * Linkを使うことでクライアントサイドナビゲーション（ページ遷移時にページ全体を再読み込みせず、部分的に更新する仕組み）が可能になる。
 * これにより高速なページ遷移を可能にする。
 */
import Link from "next/link";

/**
 * HomePageという関数コンポーネントを定義し、export defaultでExport
 * Next.jsのapp Directoryの直下にあるため、トップページ(/)と認識される。
 * Next.jsではapp/page.tsxが自動的にRoot pageとなる。
 * @constructor
 */
export default function HomePage() {
  /**
   * min-h-screen : 画面全体の高さを確保するクラス
   * w-full : 指定する要素の幅を親要素に対して100%にする
   * flex : 要素をFlexBoxで配置
   * items-center : 縦方向の中央揃え
   * justify-center : 横方向の中央揃え
   * text-5xl : Tailwindのプリセットでかなり大きめの文字サイズを適用
   * main : ページの主要コンテンツをマークアップ
   * max-w-xl : 最大幅を制限、これにより、コンテンツが横長になりすぎず読みやすくする
   * text-5xl : 文字サイズを大きく(5xl = 約3rem = 48px)する
   * font-extrabold : fontの太さを極太
   * mb-6 : 下にマージンを6追加（1.5rem = 24px）
   * drop-shadow : テキストに影をつけs人性を向上
   * text-lg : 文字サイズをlg(1.125-rem = 18px)に設定
   * mb-8 : 下に8(2rem = 32px)のマージンを追加して余白を確保
   * href="/1" : ブログ一覧ページ(/1)へ遷移するリンク。
   * text-blue-600 : テキストの色を青(blue-600)にする
   * font-semibold : フォントを少し太めにする
   * py-3 px-6 : 上下に12px、左右に24pxのパディングを調整
   * shadow border : ボタンに影と枠線を追加
   * hover:bg-gray-100 : ホバー時（カーソルを載せたとき）に背景色をgray-100（薄いグレー）に変更
   * transition-colors : 色の変化をスムーズにするanimation effect
   */
  return (
<div className="min-h-screen w-full flex items-center justify-center">
  <main className="text-center max-w-xl">
    <h1 className="text-5xl font-extrabold mb-6 drop-shadow">Welcome to My Site</h1>
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
