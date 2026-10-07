#!/usr/bin/env sh
set -eu
rm -rf out
mkdir -p out
find src -name '*.java' -print0 | xargs -0 javac -d out
