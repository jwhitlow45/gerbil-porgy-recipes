import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type recipeProps = {
  markdown_file_path: string;
}

const Recipe = (props: recipeProps) => {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetch(props.markdown_file_path)
      .then((response) => response.text())
      .then((text) => {
        setText(text)
      })
  }, [props.markdown_file_path])

  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
    </div>
  )
}

export default Recipe;