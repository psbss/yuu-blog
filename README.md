# Yuu-Blog

This is my blog build with Gatsby.js

# About
Gatsby.js に実装されているコマンドはそのまま利用することができます。  
Github Actions にて ビルド -> デプロイ を行っているので、場所や端末を気にすることなくどこでもブログがかけます。

# Feature
Github Actions を活用することで、remote/masterにpushすると自動でbuild -> Deploy -> Artifact(生成物)を再度masterにpushしてくれます。
ここのロジックは(```.github/workflows/build.yaml```)にて定義。

最後にmasterに生成物をpushし直すのは次回ビルド時に変更したもののみビルドし直すことで効率を高めるためです。

プロジェクト管理は Github Projects にて行っています。

## Command
Gatsby 関連コマンド
```bash
# Build
    gatsby build

# Develop Server
    gatsby develop

# Make public
    gatsby serve

# Delete .cache/ public/ directory
    gatsby clean
```

独自コマンド
```bash
# push remote master 後生成物が再度masterにpushされたときのローカルブランチ切り替え
    ./changebranch.sh
```