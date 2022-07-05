import machine from './images/machine.svg'
import demo from './images/demo.gif'
import github from './images/github.svg'
import external from './images/external.svg'
import sheet from './images/sheet.svg'
import parts from './images/parts.svg'
import kids from './images/kids.jpeg'
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { GithubCorner } from './components/GithubCorner';
import {font, color} from './style/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-family: 'Courier Prime', monospace;
  }
  @keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}
`;

function App() {
  return (
    <Container>
      
      <GlobalStyle/>
      <Right>
        <img src={machine} alt='gacha'/>
      </Right>
      <Left>
        <GithubCorner/>
        <Margin128/>
        <Hero>ボトルキャップ駆動型ガチャガチャ<br/>組み立てキット<br/><span>v1.0.0</span></Hero>
        
        <Margin64/>
        <Heading>これは何?</Heading>
        <Description>コインの代わりにボトルキャップを入れることで一回まわせる、オープンソースなガチャガチャです。<br/><br/>中に入れる景品はあなた次第。<br/>めんどくさくなりがちなボトルキャップの回収をちょっぴり楽しくしてみませんか？<br/><br/>MDFとアクリル板があれば、正面パネルに入れるポスターや取手、外観など自由にカスタム可能です。あなたの街でも使ってみてください。</Description>
        <Margin16/>
        <Media src={demo}/>
        
        <Margin64/>
        <Heading>つくりかた</Heading>
        <Description>ガチャガチャは、MDF板（5.5mm）とアクリル板、そして市販部品を揃えれば、お近くのFabスペースのレーザーで部品をカットして2時間ほどで作ることができます。カットデータはGithub上にアップされているのでご自由にダウンロードしてお使いください</Description>
        <Margin16/>
        <IconLink href='https://github.com/lodgefab/bottle-cap-gacha/blob/main/GACHA_MDF5.5mm.ai' target='_blank' iconPath={github}>
          <FontAwesomeIcon icon="fa-regular fa-file-spreadsheet" />
          MDF 5.5mm カットデータ
        </IconLink>
        <Margin16/>
        <IconLink href='https://github.com/lodgefab/bottle-cap-gacha/blob/main/GACHA_Acrylic3mm.ai' target='_blank' iconPath={github}>Acrylic 3.0mm カットデータ</IconLink>
        <Margin16/>
        <IconLink href='https://docs.google.com/spreadsheets/d/1cDXzpXNec14m1KFo_bHg3_JA13f9ayJmwX-NvcRkl2E/edit?usp=sharing' target='_blank' iconPath={sheet}>市販部品リスト</IconLink>
        <Margin16/>
        <Media src={parts}/>
        <Margin64/>
        <Heading>Tutrial</Heading>
        <Description>組み立て動画を作成しました。一つ一つの工程を省略せずに載せてるので、まず初めにこちらを見てもらうことをお勧めします。</Description>
        <Margin16/>
        <Youtube>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-rb8LY5E3wk" loop="1" playlist="-rb8LY5E3wk" frameborder="0" rel="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Youtube>
        <Margin64/>
        <Heading>Author</Heading>
        <Description>Shintaro Nakajima (LODGE)</Description>
        <Description>Taisho Ichikawa (LODGE)</Description>
        <Description>Yoichiro Watanabe (Fablab Hiroshima・Akitakata)</Description>
        <Margin64/>
        <Footnote>このプロジェクトは <InlineLink href='https://lodge.yahoo.co.jp/'>LODGE</InlineLink> と <InlineLink href='http://www.fablabhiroshima.com/'>Fablab 広島安芸高田</InlineLink>の共同で製作されました。<br/>疑問・質問があれば、<InlineLink href="mailto:lodgefab@gmail.com">こちら</InlineLink>までお気軽にご連絡ください.</Footnote>
        <Margin128/>
      </Left>
        
    </Container>
  );
}

export default App;

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(2, auto);
  max-width:960px;
  height: 100vh;
  margin:0 auto;
  grid-gap:64px;
`

const Left = styled.div`
  /* overflow-y:auto; */
`

const Right = styled.div`
  width:320px;
  
  img{
    width:320px;
    height:100%;
    object-fit:contain;
    position:fixed;
  }

`

const Hero = styled.div`
  border-top:1px solid ${color.content.dark};
  border-bottom:1px solid ${color.content.dark};
  padding:64px 0 32px;
  text-align:center;
  ${font.h2};
  color:${color.content.dark};
  span{
    ${font.h3};
  }
`

const Heading = styled.h3`
  ${font.h2};
  color:${color.content.dark};
  margin:0 0 16px 0;
`

const Description = styled.p`
  ${font.article1};
  color:${color.content.dark};
  /* margin:0 0 16px 0; */
`
const Footnote = styled.p`
  ${font.article2};
  color:${color.content.middle};
`

const Media = styled.img`
  width:100%;
  height:320px;
  object-fit:cover;
`
const Margin128 = styled.div`
  height:128px;
`
const Margin64 = styled.div`
  height:64px;
`
const Margin16 = styled.div`
  height:16px;
`

const IconLink = styled.a`
  display:flex;
  align-items: center;
  ${font.subtitle1};
  color:${color.utils.link};
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
  &:before{
    width:24px;
    height:24px;
    margin:0 8px 0 0;
    display: inline-block;
    content:'';
    background-image:url(${props => props.iconPath});
  }
  &:after{
    width:16px;
    height:16px;
    margin:0 0 0 8px;
    display: inline-block;
    content:'';
    background-image:url(${external});
    background-size:16px 16px;
  }

`
const InlineLink = styled.a`
  font-weight:bold;
  text-decoration: none;
  color:${color.utils.link};
  &:hover{
    text-decoration: underline;
  }
`
const Youtube = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  iframe{
    width: 100%;
    height: 100%;
  }
`