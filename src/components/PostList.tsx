import files from '../assets/post_index.json';

const PostList = () => {
  return (
    <div>
      <h1>posts</h1>
      {files.sort(
        (a: string, b: string) => {
          return b.localeCompare(a);
        }
      ).map((file: string) => (
          <h2 onClick={() => window.location.href = "/" + file} style={{ cursor: 'pointer', width: 'fit-content' }}>
            {file.replace('.md', '').split('_').join(' ')}
          </h2>
      ))}
    </div>
  );
};

export default PostList;