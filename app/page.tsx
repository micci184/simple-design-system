export default function Page() {
  return (
    <main className="min-h-screen bg-background text-text p-400">
      <section className="max-w-5xl mx-auto space-y-400">
        <h1 className="text-hero">Simple Design System</h1>
        <p className="text-text-secondary text-body">
          FigmaのデザイントークンをCSS変数経由でTailwindにマップしています。
        </p>
        <div className="rounded-200 border border-border p-400 bg-background-secondary">
          <h2 className="text-heading mb-200">Tokens</h2>
          <ul className="list-disc pl-400 text-subheading">
            <li>Colors: background/text/border/icon mapped to CSS variables</li>
            <li>Spacing: 050〜4000</li>
            <li>Typography: body/heading/subheading/subtitle/hero</li>
            <li>Radius: 200, full</li>
            <li>Border width: DEFAULT</li>
            <li>Shadows: TBD（Figma側のスタイル検出後に同期）</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
