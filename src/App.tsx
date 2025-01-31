import { useContext, useEffect, useState } from 'react';
import './App.css'

import Post from './components/Post';
import PostList from './components/PostList';
import Header from './components/Header';
import PathContextProvider from './context/PathContext';
import { PathContext } from './context/contexts';


const headerStyle: React.CSSProperties = {
  display: 'flex',

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'fit-content',

  margin: 'auto',

  color: '#7851A9'
}

const bodyStyle: React.CSSProperties = {
  // note: width is defined in App.tsx using media queries
  display: 'flex',

  flexDirection: 'column',

  margin: '0 auto auto auto',

  textAlign: 'left',
}

function App() {

  const { path } = useContext(PathContext);
  const [showHomePage, setShowHomePage] = useState(path === '/');

  useEffect(() => {
    setShowHomePage(path === '/');
  }, [path]);

  return (
    <div>
      <Header style={headerStyle} />
      <div id="body" style={bodyStyle}>
        {showHomePage && <PostList />}
        {!showHomePage && <Post markdown_file_path={"posts/" + path} />}
      </div>
    </div>
  );
}

export default App
