import gerbilPorgyImg from '../assets/gerbil-porgy.png';

type HeaderProps = {
  style: React.CSSProperties;
}

const imageStyle: React.CSSProperties = {
  width: '5em',
  height: '5em',
  borderRadius: '15%',
  margin: '0 1em',
}

const Header = (props: HeaderProps) => {
  return (
    <a href="/">
      <header style={props.style}>
        <h1>gerbil</h1>
        <img src={gerbilPorgyImg} style={imageStyle} alt="A gerbil fish hybrid" />
        <h1>porgy</h1>
      </header>
    </a>
  );
}

export default Header;