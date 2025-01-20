# Traffic Light Component / 信号機コンポーネント

A simple interactive traffic light component built with React, Vite, and Tailwind CSS.
React、Vite、Tailwind CSS で構築されたインタラクティブな信号機コンポーネント。

## Features / 機能

- Interactive traffic lights (red, yellow, blue)
- Centered display on screen
- Built with modern React practices
- Styled with Tailwind CSS and shadcn/ui components

---

- インタラクティブな信号機（赤、黄、青）
- 画面中央に表示
- モダンな React プラクティスを使用
- Tailwind CSS と shadcn/ui コンポーネントでスタイリング

## Prerequisites / 前提条件

- Node.js (v16 or higher)
- Python3 (for serving static files)

## Installation / インストール

```bash
# Clone the repository
git clone https://github.com/heyjosephme/codingTestKfjt/trafficLight

# Navigate to project directory
cd codingTestKfjt/trafficLight

# Install dependencies
npm install
```

## Running the Application / アプリケーションの実行

### Option 1: Development Mode / 開発モード

You can run the development server in one of two ways:

1. Using npm:

```bash
npm run dev
```

2. Using Vite directly:

```bash
vite
```

The development server will be available at http://localhost:5173

開発サーバーを実行する方法は 2 つあります：

1. npm を使用:

```bash
npm run dev
```

2. Vite を直接使用:

```bash
vite
```

開発サーバーは http://localhost:5173 でアクセスできます。

### Option 2: Static File Serving / 静的ファイル配信

The repository includes a pre-built `dist` directory. You can serve these static files using Python's HTTP server:

```bash
cd dist
python3 -m http.server 8080
```

Access the application at http://localhost:8080

リポジトリには既にビルド済みの`dist`ディレクトリが含まれています。Python の HTTP サーバーを使用して静的ファイルを配信できます：

```bash
cd dist
python3 -m http.server 8080
```

http://localhost:8080 でアプリケーションにアクセスできます。

## Project Structure / プロジェクト構造

```
./
  ├── src/
  │   ├── LightButton.jsx    # Individual light button component
  │   ├── TrafficLight.jsx   # Main traffic light component
  │   ├── App.jsx                # Root component with centering layout
  │   └── main.jsx               # Entry point
  │
  └── dist/                      # Pre-built static files
```

## Component Hierarchy / コンポーネント階層

```
App
└── TrafficLight
    └── LightButton (×3: Red, Yellow, Blue)
```

## Interaction / インタラクション

- Click any light to activate it and deactivate others
- Initial state: Blue light is active

---

- 任意のライトをクリックすると、そのライトが点灯し、他のライトは消灯します
- 初期状態：青信号が点灯
