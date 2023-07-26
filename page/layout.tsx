//Nested Layout:app ディレクトリ直下だけではなく Page ディレクトリの配下にある 
//page.tsx ファイルに共通の Layout を適用したい場合に Page ディレクトリの直下に layout.tsx を作成することができます。
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}