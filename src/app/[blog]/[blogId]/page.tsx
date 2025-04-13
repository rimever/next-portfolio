/**
 * 静的パスを事前に生成する関数
 * /1/abcdのページが静的に生成される
 * - [{blog: "1", blogId: "abcd"}]を返すことで/1/abcdのみを事前に生成
 * - 静的なHTMLを生成するため、ページの読み込みが速いSSGのメリット
 * 動的なルートパラメータ(blog,blogId)をNext.jsに認識させる
 */
export async function generateStaticParams() {
    return [{blog: "1", blogId: "abcd"}];
}

type Props = {
    params: {
        blog:string;
        blogId:string;
    };
};

const BlogId : React.FC<Props> = ({params}) => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <p className="text-3xl font-bold">
                ブログ詳細
            </p>
        </div>
    );
};
export default BlogId;