---
title: "重い腰を上げて TailwindCSS を利用したポートフォリオを作ってみた"
date: "2020-08-04"
description: "TailwindCSS と Webpack を利用してポートフォリオ(自己紹介サイト)を新しく作り直しました。"
pagepath: "https://blog.ue-y.me/portfolio202008/thumbnail.png"
---

ポートフォリオ用に利用しているページが単なるリダイレクトリンクになっているので、そろそろ改修しようかなという次第です。

## TL;DR
- ポートフォリオを新しくした
- TailwindCSS というCSSフレームワークを利用した
- Webpack に手こずったよ
- 無事完成

![改修後](./profile_new.png)
完成イメージ

## 利用技術
### CSS Framework
- TailwindCSS（PostCSS）
  先日開催された「[サマーインターン前にツヨツヨになっちゃおうの会](https://connpass.com/event/181419/)」にて [920oj](https://twitter.com/920OJ) さん(大仏が本体)が紹介していた TailwindCSS というフレームワークを利用してみました。

### Tools
- Webpack
  前回の開発でも利用しましたが、まだまだ不慣れなので引き続き採用
  
## TailwindCSSとは
TailwindCSS とは 有名なCSSフレームワークであるBootstrapのようなコンポーネント型ではなく、ユーティリティを優先する設計思想の元作られたフレームワークです。

コンポーネント？　ユーティリティ？　と聞いてもピンとこない人もいると思うので補足すると、

- コンポーネント設計：ボタンに対して btn というクラスを付与すると自動的に padding や 色が付与される。
- ユーティリティ設計：ボタンに対して btn 等の特別なクラスは用意されていない。その代わり padding や mergin, color, hover時の挙動, アニメーションなどをクラスに付与するだけで適用できる。

ユーティリティファーストなフレームワークだとほとんどCSSをファイルに書く必要が無く、Bootstrapのように、他社と似たようなデザインになることも少ないという利点があります。

## Webpack
本来であれば、TailwindCSS 公式ページの方法にてnpmスクリプトを実行し、公開用ファイルを生成するのですが、私の環境ではエラーで実施できなかったため少し回りくどい方法を採用しています。

deploy 時の実行項目は以下です。
```bash
"deploy": "NODE_ENV=production npm run TailwindCSSCLI && npx webpack",
```

TailwindCSS では無数のクラスを持っているので、付属している[PurgeCSS}(https://purgecss.com/)を利用してファイルサイズの削減に取り掛かります。

デフォルトでは無効になっているので、 ```NODE_ENV=production```　を追加してコマンドを入力します。

---

Webpack を利用する場合以下のように
```webpack.config.js
use: [
          // ...
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
```
設置する方法がありますが、この方法ではうまく動作しなかったため ```TailwindCSSCLI``` を利用しています。

---

## 完成

npm パッケージを利用したビルドができませんでしたが、無事に新しく作ることができました。

改修前
![改修後](./profile_old.png)

改修後
![改修後](./profile_new.png)

## Links
- [Tailwind CSS](https://tailwindcss.com/)
- [Portfolio](https://ue-y.me)
