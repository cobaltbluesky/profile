import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home=()=>(
  <div>
    <Header/>
    <p>Reactで作ってるんですがデザインセンスがなさ過ぎてつらいです</p>
    <h5>更新履歴</h5>
    <p>2020/01/07:ドロワーメニューの現在地を水色で表示させ、Contactページを生やしました。</p>
    <p>2020/01/06:コンポーネントの細分化、ツイートの埋め込みを行いました。</p>
    <p>2020/01/05:あまりにも殺風景なので背景色を水色に変更しました</p>
    <p>2020/01/04:ヘッダーとドロワーを付けて仮自己紹介ページを作ってルーティングしました。</p>
    <Footer/>
  </div>
)
export default Home;
