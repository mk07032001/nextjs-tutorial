//Dynamic Routes：動的に変わるルーティングに対応[]で囲う
const Page = ({ params }: { params: { id: string[] } }) => {
  console.log(params);//ターミナルにparamsの値を表示
  return <div className="m-4 font-bold">Blog ID: </div>;
};

export default Page;