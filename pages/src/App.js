import machine from './images/machine.svg'
import demo from './images/demo.gif'
import github from './images/github.svg'
import external from './images/external.svg'
import sheet from './images/sheet.svg'
import parts from './images/parts.svg'
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
        <Hero>Bottle Cap Capsule Toy Machine <br/>Build Kit<br/><span>v1.0.0</span></Hero>
        <Margin64/>
        <Media src={parts}/>
        
        <Margin64/>
        <Heading>Why we made this?</Heading>
        <Description>Collecting plastic waste is boring. Since we run a community to make keyboards out of wasted bottle caps (<span><InlineLink href='https://anycap.xyz/' target={'_blank'}>check out #ANYCAP</InlineLink></span>), we know how hard and boring it is to collect waste plastic. In order to make recycling playful, we made a capsule toy machine ('Gachapon' in Japanese) that people can challenge with bottle caps instead of coins. The machine is made from MDF & Acrylic board. So you can make it easily at your local fab space.</Description>
        <Margin16/>
        <Media src={demo}/>
        <Margin64/>
        <Heading>OK. How can we build this?</Heading>
        <Description>The Build Kit consists of 5.5mm MDF, 3mm acrylic sheet, and mechanical parts. Cut data for MDF and acrylic sheets are available on Github. </Description>
        <Margin16/>
        <IconLink href='https://github.com/lodgefab/bottle-cap-gacha/blob/main/GACHA_MDF5.5mm.ai' target='_blank' iconPath={github}>
          <FontAwesomeIcon icon="fa-regular fa-file-spreadsheet" />
          MDF 5.5mm Cut Data
        </IconLink>
        <Margin16/>
        <IconLink href='https://github.com/lodgefab/bottle-cap-gacha/blob/main/GACHA_Acrylic3mm.ai' target='_blank' iconPath={github}>Acrylic 3.0mm Cut Data</IconLink>
        <Margin16/>
        <IconLink href='https://docs.google.com/spreadsheets/d/1cDXzpXNec14m1KFo_bHg3_JA13f9ayJmwX-NvcRkl2E/edit?usp=sharing' target='_blank' iconPath={sheet}>Mechanical Parts List</IconLink>
        
        <Margin64/>
        <Heading>Tutrial</Heading>
        <Description>We made a video tutrial. If you are interested, please check it out!</Description>
        <Margin16/>
        <Media></Media>
        <Margin64/>
        <Heading>Author</Heading>
        <Description>Shintaro Nakajima</Description>
        <Description>Taisho Ichikawa</Description>
        <Margin64/>
        <Footnote>This project is powered by <InlineLink href='https://lodge.yahoo.co.jp/'>LODGE Fab</InlineLink> and <InlineLink href='http://www.fablabhiroshima.com/'>Fablab Hiroshima.</InlineLink> <br/>If you have any questions, please contact us.</Footnote>
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
