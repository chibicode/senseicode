---
issue: 5
title: アダプティブラーニングの「選択肢が多すぎ」問題
permalink: /5-adaptive-learning
date: 2016-09-06
prev_issues:
  - 3
  - 4
# image: /images/4/barry.jpg
# tweet_id: 750120355235147776
---

学校の先生方へ

[前回の記事](/4-too-many-choices)では、アメリカの教育×IT(エドテック)業界における「選択肢が多すぎ」問題をとりあげました。

> エドテックが流行ると教育向けアプリやサービスが大量に生まれますが、それは「選択肢が多すぎ」問題を引き起こします。すると、「(エドテックの)選択が難しいと感じ、無力感にさいなまれる」「選んだ選択肢に不安を持ってしまう」「上がった期待値に届かずがっかりする」「選択に失敗した場合、自分自身を責める」といった、選択肢が多いことの負の面が表面化します。
>
> そして教育においては、選択に失敗したときのコストが大きいため、これらの負の面が他の分野より目立ちます。ゆえに懐疑派が「やっぱり教育にテクノロジーは合わない」という結論にたどり着くのです。

今回は、アメリカのエドテックにおける「選択肢が多すぎ問題」を、「アダプティブラーニング」を題材に掘り下げてみることにしましょう。

## アダプティブラーニングとは何か

2016年現在、日本の教育現場では「[アクティブラーニング](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0)」、すなわち先生ではなく生徒が主体(能動的)になる学習方法が流行っているようですが、アメリカの教育現場ではそれと同じくらい「アダプティブラーニング」が流行っています。ご存知の方も多いかもしれません。

**アダプティブラーニングとは、学習者の得意なこと・苦手なことを学び取り、学習者にとって最適な教材を自動で「おすすめ」してくれるデジタル教材のことを指します。**

ぼくは2015年12月に書いた「[『ニッポンのジレンマ』元日スペシャルに出たとき、カンペに書かれていたこと](http://chibicode.com/nhk-dilemma/)」という記事で、アダプティブラーニングについて以下のように書きました。

> ぼくは教育×テクノロジーの分野で働いているのだが、この分野で人工知能に期待されているのは「[アダプティブラーニング](http://globis.jp/article/1314)」だ。「アダプティブ (adaptive)」とは「順応する」という意味である。手短に説明すると、アダプティブラーニングは特殊なデジタル教材のことで、学習者の得意なこと・苦手なことを学び取り、学習者にとって最適な教材を自動で「おすすめ」してくれるものだ。
>
> Amazonが「おすすめ商品」を表示してくれるように、たとえば子どもが「3桁－2桁=1桁の引き算が苦手」と分かったら、それを克服するための「おすすめ問題」を出題してくれるのがアダプティブラーニングである。あるいは、もし子どもが「百分率」で躓いているとしたら、割合の基礎をチェックする問題を出し、それがダメなら分数や小数の基礎をチェックする問題を出し、それもダメなら割り算の基礎をチェックする問題を出し…と、人工知能が自動で子どもの苦手の原因を追求したりもできる。
>
> アナログ世界だと、これは「上手な先生」が得意とすることだが、人工知能によって同じことがデジタルでも可能になったのだ。
>
> 教育のIT化が進んでいるアメリカでは、すでにアダプティブラーニング教材が学校で使われている。中学2年生までの算数・数学のアダプティブラーニング教材を提供する[Dreambox](http://www.dreambox.com/)は、2015年時点で150万人の生徒と7万5000人の先生が[利用している](http://www.dreambox.com/press-releases/dreambox-learning-secures-10-million-in-series-b-funding)。
>
> また2015年には、同じくアダプティブラーニング業界で先をゆく米[Knewton](https://www.knewton.com/)社が、ベネッセ・ソフトバンクの合弁教育ベンチャーと日本展開のため[提携したりしている](http://itpro.nikkeibp.co.jp/atclact/activer/nkpr/RSP390887_08072015/)。

## Dreamboxのアダプティブラーニング機能のデモ

上記で引用したDreamboxのアダプティブラーニング機能を見てみましょう。実際にDreamboxのアプリ画面を使って説明します([ソース](http://www.dreambox.com/reporting/assignfocus))。

たとえば算数の授業で、生徒たちは最終的に「分数の掛け算」をマスターすることが求められているとします。

まず優等生のAlfonzo君がDreamboxにログインすると、「分数の掛け算」というレッスンが表示されています。

![](/images/5/alfonzo-1.jpg)

クリックすると、「分数の掛け算」をマスターする第一ステップである、「整数×分数」のレッスンが始まります。

![](/images/5/alfonzo-2.jpg)

つぎに、Alfonzo君ほど分数をうまく理解できていないLeannaちゃんの場合、掛け算ではなく「分数の足し算」のレッスンが表示されています。ここに至るまでのレッスンを繰り返すなかで、Dreamboxの人工知能は「Leannaちゃんには、分数の掛け算はまだ早い」と判断したわけですが、その部分は割愛します。

![](/images/5/leanna-1.jpg)

クリックすると、「分母が同じの、仮分数と真分数の足し算」の問題が表示されます。(仮分数=分子が分母より大きい。真分数はその逆)

![](/images/5/leanna-2.jpg)

最後に、同じく分数に苦労しているRosellaちゃんにも、「分数の足し算」のレッスンが表示されています。

![](/images/5/rosella-1.jpg)

しかし、Dreamboxの人工知能はここに至るまでのレッスンを繰り返すなかで、「Rosellaちゃんは、Leannaちゃんほど分数の理解がない」と判断しました。ゆえに、彼女にはさらに易しい「分母が同じの、答えが仮分数にならない分数の足し算」の問題が表示されます。

![](/images/5/rosella-2.jpg)

このように、Dreamboxは生徒の習熟度に応じて最適な教材を提供してくれるのです。また、先生は全生徒の習熟度を一覧形式で見ることができます([画像ソース](http://www.dreambox.com/blog/whats-new-june-2016))。

![](/images/5/progress.png)

Dreamboxは中学2年生までの算数・数学にしか対応していませんが、なんとなくどんなサービスかがお分かりいただけたでしょうか。

## アダプティブラーニングの「選択肢が多すぎ」問題

ここで「選択肢が多すぎ」問題に戻りましょう。[弊社(EdSurge)の調査によると](https://www.edsurge.com/research/special-reports/adaptive-learning/software)、現場で使われているアダプティブラーニングのアプリ・サービスは現在なんと24種類もあります(2016年2月)。以下がその一覧(名前順)です。リンク先はEdSurge内のサービス紹介ページです。

- **[ALEKS](https://www.edsurge.com/product-reviews/aleks)** - 小中高の算数・数学のアダプティブラーニング教材。
- **[Brightspace Leap](https://www.edsurge.com/product-reviews/desire2learn-product)** - 小中高から大学、社会人教育までをカバーするデジタル教材の大手で、アダプティブラーニング教材も充実。
- **[CK-12 Platform](https://www.edsurge.com/product-reviews/ck-12-platform)** - 理系科目の教材を無料で提供しているNPO。アダプティブな数学・科学の学習アプリも提供。
- **[Cogbooks](https://www.edsurge.com/product-reviews/cogbooks-product)** - 現時点では、アダプティブな歴史と生物学のデジタル教材を提供中。
- **[DreamBox](https://www.edsurge.com/product-reviews/dreambox-learning)** - 中学2年生までの算数・数学
- **[Fishtree](https://www.edsurge.com/product-reviews/fishtree)**
- **[Fulcrum Labs](https://www.edsurge.com/product-reviews/adapt-courseware)**
- **[i-Ready](https://www.edsurge.com/product-reviews/i-ready)**
- **[Istation](https://www.edsurge.com/product-reviews/istation-reading)**
- **[Knewton](https://www.edsurge.com/product-reviews/knewton)**
- **[KnowRe](https://www.edsurge.com/product-reviews/knowre)**
- **[LearnBop](https://www.edsurge.com/product-reviews/learnbop)**
- **[LearnSmart + SmartBook](https://www.edsurge.com/product-reviews/mcgraw-hill-learnsmart)**
- **[Lexia Reading Core 5](https://www.edsurge.com/product-reviews/lexia-reading-core5)**
- **[Mastering](https://www.edsurge.com/product-reviews/mastering)**
- **[Mathspace](https://www.edsurge.com/product-reviews/mathspace-product)**
- **[MyLab](https://www.edsurge.com/product-reviews/mylab)**
- **[Redbird Advanced Learning](https://www.edsurge.com/product-reviews/redbird-advanced-learning-courses)**
- **[ScootPad](https://www.edsurge.com/product-reviews/scootpad)**
- **[Smart Sparrow](https://www.edsurge.com/product-reviews/smart-sparrow)**
- **[ST Math](https://www.edsurge.com/product-reviews/st-math)**
- **[SuccessMaker](https://www.edsurge.com/product-reviews/successmaker)**
- **[Think Through Math](https://www.edsurge.com/product-reviews/think-through-math)**
- **[Waggle](https://www.edsurge.com/product-reviews/waggle)**
