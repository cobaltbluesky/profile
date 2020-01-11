import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutMe=()=>{
  return(
    <div>
      <Header/>
      <img src='./shizuku192.png'alt='IconBy荻素'/>
      <h3>HN:gunjou</h3>
      <h3>本名:田栗青空</h3>
      <h3>学校:久留米高専</h3>
      <h3>学科:制御情報工学科</h3>
      <h3>学年:2年生</h3>
      <h3>誕生日:2003年3月16日生まれ</h3>
      <Footer/>
    </div>

  );
}
export default AboutMe;
