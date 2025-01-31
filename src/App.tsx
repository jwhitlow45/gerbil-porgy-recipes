import { useEffect, useState } from 'react';
import './App.css'

import Post from './components/Post';
import PostList from './components/PostList';
import Header from './components/Header';

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
  const [postPath, setPostPath] = useState<string>('');
  const [showHomePage, setShowHomePage] = useState<boolean>(true);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setShowHomePage(true);
    } else {
      setShowHomePage(false);
      setPostPath(path);
    }
  }, [postPath]);


  return (
    <div>
      <Header style={headerStyle} />
      <div id="body" style={bodyStyle}>
        {showHomePage && <PostList />}
        {!showHomePage && <Post markdown_file_path={"posts/" + postPath} />}
      </div>
    </div>
  );
}

export default App
