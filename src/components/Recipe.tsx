import { useEffect, useState } from "react";
import Markdown from "react-markdown";

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
      <Markdown>{text}</Markdown>
    </div>
  )
}

export default Recipe;