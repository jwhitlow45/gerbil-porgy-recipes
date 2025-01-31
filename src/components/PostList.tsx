import { useContext } from 'react';
import files from '../assets/post_index.json';
import { PathContext } from '../context/contexts';

const ListItemStyle: React.CSSProperties = {
  cursor: 'pointer',
  width: 'fit-content',
}

const PostList = () => {
  const { setPath } = useContext(PathContext);

  return (
    <div>
      <h1>posts</h1>
      {files.sort(
        (a: string, b: string) => {
          return b.localeCompare(a);
        }
      ).map((file: string) => (
        <h2 onClick={() => setPath("/" + file)} style={ListItemStyle}>
          {file.replace('.md', '').split('_').join(' ')}
        </h2>
      ))}
    </div>
  );
};

export default PostList;