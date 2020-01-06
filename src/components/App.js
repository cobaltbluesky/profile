import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter,Route}from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const useStyles=makeStyles({
  img:{
    float:'left',
  }
})

const App=()=>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <switch>
        <Route exact path='/'component={Home}/>
        <Route path='/AboutMe'component={AboutMe}/>
      </switch>
    </BrowserRouter>
  );
}
const Home=()=>(
  <div>
    <Header/>
    <p>Reactで作ってるんですがデザインセンスがなさ過ぎてつらいです</p>
    <h5>更新履歴</h5>
    <p>2020/01/05:あまりにも殺風景なので背景色を水色に変更しました</p>
    <p>2020/01/04:ヘッダーとドロワーを付けて仮自己紹介ページを作ってルーティングしました。</p>
    <Footer/>
  </div>
)
const AboutMe=()=>(
  <div>
    <Header/>
    <Footer/>
    <img src='./shizuku192.png'alt='IconBy荻素'/>
    <h4>自己紹介(仮)</h4>
    <h3>gunjou</h3>
    <h3>久留米高専2年制御情報工学科</h3>
    <h3>2003年3月16日生まれ</h3>
    <h3>
      twitter:
      <a href="https://twitter.com/chuni_character">@chuni_character</a>
    </h3>
  </div>
)

export default App;
