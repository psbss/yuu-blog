# Yuu-Blog

This is my blog build with Gatsby.js

# About
Gatsby.js に実装されているコマンドはそのまま利用することができます。  
Github Actions にて ビルド -> デプロイ を行っているので、場所や端末を気にすることなくどこでもブログがかけます。

# Feature
Github Actions を活用することで、remote/masterにpushすると自動でbuild -> Deployをしてくれます。
ここのロジックは(```.github/workflows/build.yaml```)にて定義。

~~最後にmasterに生成物をpushし直すのは次回ビルド時に変更したもののみビルドし直すことで効率を高めるためです。~~  
廃止しました、理由としては差分のみのビルドを行うよりも再ビルドしたほうがコストが安いからです。

プロジェクト管理は ~~Github Projects~~ Github issues にて行っています。

## Command
Gatsby 関連コマンド
```bash
# Build
    gatsby build

# Develop Server
    gatsby develop

# Public Server
    gatsby serve

# Delete .cache/ public/ directory
    gatsby clean
```

独自コマンド
```bash
# push remote master 後生成物が再度masterにpushされたときのローカルブランチ切り替え
    sh changebranch.sh
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
