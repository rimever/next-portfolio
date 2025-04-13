export async function generateStaticParams() {
    const paths = [{blog: "1"}];
    return paths;
}

type Props = {
    params: { blog: string };
};

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