# Yuu-Blog

This is my blog build with Gatsby.js

## Feature

- Gatsby.js npmコマンド
- CI/CD by GithubActions
- Github Issues
- Automatic genelated OGP Image

Gatsby.js に実装されているコマンドはそのまま利用することができます。  
CI/CD は Github Actions を採用し、個人契約のホスティングサーバにて配信しています。そのため場所や端末を気にすることなくどこでもブログを書いて記事の公開可能です。

remote/masterにpushすると自動でbuild -> Deployをしてくれます。  
ここのロジックは(```.github/workflows/build.yaml```)にて定義してあります。

プロジェクト管理は Github issues にて行っています。

記事のOGPアイキャッチ画像は自動で生成されます。生成ロジックは以下の記事に書いてあります。  
[https://blog.ue-y.me/gatsby-ogp/](https://blog.ue-y.me/gatsby-ogp/)

## Command
Gatsby 関連コマンド
```bash
# Build
    npx gatsby build

# Develop Server
    npx gatsby develop

# Public Server
    npx gatsby serve

# Delete .cache/ public/ directory
    npx gatsby clean
```

独自コマンド
```bash
# New article
    sh newarticle.sh
```

### Make new article
新しい記事を作るときに毎回フォルダ作成から行うのは面倒なので、コマンドで行えるようにした。
```bash
sh newarticle.sh [Article slug] [Article title]
```

- [Article slug] : ```content/blog/```に作成するディレクトリ名（ページ上のスラッグとなる部分）
- [Article title] : ```index.md``` ヘッダに記入するタイトル

```index.md``` のヘッダに記入される情報
- title: [Article slug]
- date: シェルスクリプト実行年月日
- description: 空欄
- pagepath: OGP用アイキャッチ画像のパス
