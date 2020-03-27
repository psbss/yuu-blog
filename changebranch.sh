#!/bin/bash
git fetch
git branch -a
git checkout origin/master
git branch -D master
git branch -D draft
git push --delete origin draft
git branch draft
git checkout -b master