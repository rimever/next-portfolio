/**
 * Next.jsのappディレクトリのダイナミックルートで使用される関数。
 * この関数が返すparamsをもとにNext.jsは事前に静的なHTMLを生成(SSG:Static Site Generation)する
 * {blog:"1"}というオブジェクトを含む配列を返すことで、"/1"が静的に生成される。
 * [{blog:"1"}]を返すことで、/1のみを事前に生成
 * 静的にHTMLを作成するため、ページのロードが速い
 * 動的なルートパラメーターをNext.jsに認識させる
 */
export async function generateStaticParams() {
    const paths = [{blog: "1"}];
    return paths;
}

/**
 * paramsは、Next.jsによって自動的に渡されるオブジェクトで、動的ルートの値を含む
 * blogというキーに対応するstring型の値を持つオブジェクトとして型を定義
 */
type Props = {
    params: { blog: string };
};
/**
 * React.FC<props>は型付きのReact関数component
 * {params}を受け取り、その中でparams.blogを使用できるようにする
 * @param params
 * @constructor
 */
const Blog: React.FC<Props> = ({params}) => {
    return (
        <div className="flex w-full min-h-screen items-center justify-center">
            <p className="text-3xl font-bold">
                ブログ一覧
            </p>
        </div>
    );
};

export default Blog;