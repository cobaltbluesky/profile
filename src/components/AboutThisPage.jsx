import React from 'react';
import Header from './Header';

const AboutThisPage=()=>{
  return(
    <div>
      <Header/>
      <h3>React.jsというJavascriptフレームワークを使って作りました。</h3>
      <h3>github.ioでのルーティングにreact-routerを使用しているためリクエストが処理できずURLを直叩きすると404を吐かれます。</h3>
      <h3>ページ上部のアプリバーとドロワーにはmaterial-uiというCSSフレームワークを使っています。</h3>
      <h3>今はとても殺風景なサイトですが春休みにドメイン取ってThree.jsとReact.jsを使ってゴリゴリの３Dポートフォリオを作る予定なのでお楽しみに！</h3>
    </div>
  )
}
export default AboutThisPage;
