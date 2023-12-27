import { useState, useEffect } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css"
import {FaFreeCodeCamp} from 'react-icons/fa'


function App() {

  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName:"Burak",
    "lastName: "Ea",
    "age":25
  } 

  \`\`\`
  - Zed
  - Kayn
  - Shadow

  >blockquote
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  **bold text**
  `
  )
/* 
   */
marked.setOptions({
  breaks: true
})

  return (
    <div className="App container-fluid">
       <div
        className="headPrev1 container-sm mx-auto w-50">
        <FaFreeCodeCamp
         className="free"/>Previewer
          </div>
      <textarea
      className="container-sm mx-auto w-50 editorClass"
      id="editor"
      value={text}
      onChange={(e)=> setText(e.target.value)}
      >
      </textarea>
      <div
       className="headPrev2 container-sm mx-auto w-75">
        <FaFreeCodeCamp
         className="free"/>Previewer
         </div>
      <main
      id="preview"
      className="container-sm mx-auto w-75"
      dangerouslySetInnerHTML={{
        __html:marked(text)
      }}
      ></main>
    </div>
  );
}

export default App;
