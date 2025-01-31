import { useEffect, useState } from "react";
import Markdown from "react-markdown";

type postProps = {
  markdown_file_path: string;
}

const Post = (props: postProps) => {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetch(props.markdown_file_path)
      .then((response) => response.text())
      .then((text) => {
        setText(text)
      })
  }, [props.markdown_file_path])

  return (
    <Markdown>{text}</Markdown>
  )
}

export default Post;