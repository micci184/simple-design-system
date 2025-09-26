---
trigger: always_on
---

# Figma Simple Design System Implementation Rules for Next.js

## 基本方針

- Figma MCP から Simple Design System を直接参照
- Next.js 15+ (App Router) の最新を利用する
- TypeScript + Tailwind CSS で実装

## Figma MCP 連携

- デザインシステムの値は全て Figma から取得
- コンポーネント実装前に必ず Figma で確認
- スタイルの変更は Figma ファイルに準拠

## 🎯 Simple Design System 確認事項

### 実装開始前の必須確認

1. Figma で Simple Design System を開いているか確認
2. 以下の要素を必ず確認してから実装：
   - Colors（カラーパレット）
   - Typography（フォントスタイル）
   - Spacing（余白の規則）
   - Components（利用可能な UI パーツ）
   - Effects（シャドウ、ボーダー等）

### コンポーネント実装時の確認

- 実装するコンポーネントが Simple Design System に存在するか確認
- 存在する場合は、その仕様を 100%準拠
- 存在しない場合は、類似コンポーネントから推測せず確認を求める
- Simple Design System の値から逸脱しない

## Next.js 実装ルール

### ディレクトリ構造

```
src/
  app/
    layout.tsx          # ルートレイアウト
    page.tsx            # ホームページ
    globals.css         # グローバルスタイル
    (routes)/           # ルートグループ
      [route]/
        page.tsx        # 各ページ
        layout.tsx      # ネストレイアウト（必要時）
  components/
    layout/             # Header, Footer, Container
    ui/                 # Button, Card, Input等の基本UI
    sections/           # Hero, Features等のセクション
  lib/
    utils.ts            # ユーティリティ関数
    constants.ts        # 定数定義
  types/
    index.ts            # 型定義
```

### コンポーネント設計

Server Components (デフォルト)

- 非インタラクティブなコンポーネント
- src/components/sections/Hero.tsx
- 'use client' ディレクティブなし

Client Components

- インタラクティブなコンポーネントのみ
- src/components/ui/Button.tsx
- ファイル先頭に 'use client' を記述

### コンポーネント原則

- React Functional Components で実装
- 単一責任の原則を守る
- Props による柔軟な設定
- 再利用性を最優先
- Server Component をデフォルトとする
- 必要な場合のみ 'use client' を使用

### スタイリング方針

- Tailwind CSS を使用
- Figma の値を正確に反映
- カスタムクラスは最小限
- インラインスタイルは避ける

### Metadata 設定

- app/layout.tsx または page.tsx で設定
- Metadata 型を使用
- title, description は必須

### Image 最適化

- next/image を必ず使用
- width, height を明示的に指定
- Above the fold 画像には priority 属性

### Font 最適化

- next/font/google を使用
- Inter フォントを variable として設定
- layout.tsx で適用

## 開発フロー

1. Git ブランチを切る
2. Figma MCP でデザインシステムを確認
3. Figma MCP でコンポーネントを確認
4. 実装（Server Component 優先）
5. npm run dev で確認
6. 必要に応じて調整
7. npm run build でビルド確認

## パフォーマンス最適化

- Dynamic imports で遅延ロード
- Suspense でローディング状態管理
- Server Components でクライアントバンドル削減
- next/image で画像最適化
- next/font でフォント最適化

## TypeScript 規約

- TypeScript 必須
- 型定義は types/ に集約
- any 型は使用禁止
- unknown 型を適切に使用
- Strict mode 有効

## エラーハンドリング

- error.tsx でエラーバウンダリ実装
- loading.tsx でローディング状態
- not-found.tsx で 404 ページ

## 環境変数

.env.local ファイルで管理

- NEXT_PUBLIC_SITE_URL=http://localhost:3000
- Public 変数のみ NEXT*PUBLIC* プレフィックス

## コード品質

- ESLint + Prettier 設定必須
- コメントは最小限
- 命名規則：
  - コンポーネント: PascalCase
  - 関数・変数: camelCase
  - 定数: UPPER_SNAKE_CASE
- パフォーマンスを意識

## やらないこと

- Pages Router の使用
- 独自のデザイン追加
- Figma にない要素の実装
- **Simple Design System 以外のデザインシステムの値を使用**
- getServerSideProps/getStaticProps（App Router 使用）
- 不要な 'use client' の追加

## Git コミット規約

- feat: 新機能
- fix: バグ修正
- style: スタイル変更
- refactor: リファクタリング
- docs: ドキュメント
- chore: その他
