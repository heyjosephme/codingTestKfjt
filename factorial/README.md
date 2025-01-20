# 階乗計算プログラム

再帰関数を使用して与えられた数値の階乗を計算する TypeScript プロジェクトです。

## 概要

このプロジェクトは以下の機能を実装しています：

- 正の整数 N を入力として受け取る
- 再帰関数を使用して N!（N の階乗）を計算
- TypeScript の型定義を適切に行い、結果を返却
- 機能検証のためのテストケースを含む

## 必要要件

以下のいずれかの環境で実行可能です：

- Node.js と npm
- Bun
- その他の TypeScript 実行環境

## インストール方法

```bash
# リポジトリのクローン
git clone https://github.com/heyjosephme/codingTestKfjt/factorial

# npmを使用する場合
npm install

# Bunを使用する場合
bun install
```

## プロジェクト構造

```
factorial-calculator/
├── src/
│   ├── index.ts           # メインプログラム
│   ├── factorial.ts       # 階乗計算関数
│   └── __tests__/
│       └── factorial.test.ts  # テストケース
├── package.json
└── README.md
```

## 使用方法

メインプログラムの実行:

```bash
# npmの場合
npm run start

# Bunの場合
bun run src/index.ts
```

テストの実行:

```bash
# npmの場合
npm test

# Bunの場合
bun test
```

## 関数の定義

```typescript
const factorial = (N: number): number => {
  // 実装の詳細はソースコードを参照
};
```

## 使用例

```typescript
factorial(4); // 戻り値: 24
factorial(5); // 戻り値: 120
```

## テスト

このプロジェクトには以下を検証するテストケースが含まれています：

- 基本的な階乗計算
- エッジケース
- 入力値の検証

## 注意事項

- 入力値は正の整数である必要があります
- 要件通り再帰関数を使用して実装しています
- 入力値と戻り値に適切な TypeScript の型定義を行っています
