//Route Group:ルーティングのパスに影響を与えないディレクトリを作成,()で囲む
export default function MarketingLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return <div className="m-4 font-bold">{children}</div>;
  }
  