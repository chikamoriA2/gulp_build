# gulp_build

`gulpfile.js`において下記の2行があるが、`rootdir`の中にはscssファイルがあり、`outdir`の中にはcssファイルが格納されている。

```
rootdir = '/webpage/ngs/html/web/_scss/'
outdir = '/webpage/ngs/html/web/css/'
```

VS Codeで`rootdir`の中のscssファイルを編集・保存するたびにリアルタイムで`outdir`の中に変換後のcssファイルが蓄積される。

使い方としては、本リポジトリを（Rootユーザで使用しているとして、ルートディレクトリなどに）クローン後、ディレクトリの中に入り、

```
npx gulp
```

と入力すれば、リアルタイムでのSCSSからCSSへの変換を行える状況になる。止める場合は、`Ctrl` + `C`等で止めるとよい。
