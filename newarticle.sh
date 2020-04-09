#!/bin/bash
if [ $# -ne 2 ]; then
    echo "error two argument require."
    echo "./newarticle.sh [slug] [title]"
    exit 1
fi
mkdir ./blog/content/blog/$1
touch ./blog/content/blog/$1/index.md
var_date=`date '+%Y-%m-%d'`
echo '---
title: "'$2'"
date: "'$var_date'"
description: ""
pagepath: "https://blog.ue-y.me/'$1'/thumbnail.png"
---' >> ./blog/content/blog/$1/index.md