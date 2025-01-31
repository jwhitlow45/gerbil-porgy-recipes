import { useContext } from 'react';
import gerbilPorgyImg from '../assets/gerbil-porgy.png';
import { PathContext } from '../context/contexts';

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
  const { setPath } = useContext(PathContext);

  return (
    <header style={props.style} onClick={() => setPath("/")}>
      <h1>gerbil</h1>
      <img src={gerbilPorgyImg} style={imageStyle} alt="A gerbil fish hybrid" />
      <h1>porgy</h1>
    </header>
  );
}

export default Header;