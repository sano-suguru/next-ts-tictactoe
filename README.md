# Next.js Tic-Tac-Toe

[Next.js](https://nextjs.org/)を使ってスクラッチで作った三目並べ（ＯＸ）ゲームです。

## はじめに

最初に、開発サーバーを実行します。

```bash
npm run dev
#  または
yarn dev
```

ブラウザで [<http://localhost:3000>](http://localhost:3000) を開き、結果を確認します。

## 機能

- 基本的なＯＸゲームが遊べる
- タイムトラベル（待った）

## 本番ビルド

```bash
npm run build
#  または
yarn build
```

## 本番起動

```bash
npm run build && npm run start
#  または
yarn build && yarn start
```

サーバーサイドレンダリングをするので、Node.js v12.14.1 をインストールされた Web サーバーへデプロイが必要です。

## 使用技術

- [Next.js](https://nextjs.org/)
  - styled-jsx
- [React.js](https://reactjs.org/)
  - Function Component
  - Hooks
- [TypeScript](https://www.typescriptlang.org/)
