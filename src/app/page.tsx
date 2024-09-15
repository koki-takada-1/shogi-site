import fs from 'fs';
import path from 'path';
import ShogiPlayer from '../components/ShogiPlayer';

async function getKifContents() {
  const fileNames = ['詰将棋01.kif']; // 使用する.kifファイル名のリスト
  const kifContents = {};

  for (const fileName of fileNames) {
    const filePath = path.join(process.cwd(), 'public', fileName);
    kifContents[fileName] = fs.readFileSync(filePath, 'utf8');
  }

  return kifContents;
}

export default async function Home() {
  const kifContents = await getKifContents();

  return (
    <>
      <head>
        <script defer src="https://cdn.jsdelivr.net/npm/shogi-player@1.1.17"></script>
      </head>
      <body>
        <h1>Shogi Game 1</h1>
        <ShogiPlayer kifContent={kifContents['詰将棋01.kif']} />

        {/* <h1>Shogi Game 2</h1>
        <ShogiPlayer kifContent={kifContents['example2.kif']} /> */}

        {/* 必要な場所に他のShogiPlayerコンポーネントを追加 */}
      </body>
    </>
  );
}
