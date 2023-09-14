import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const defaultInput =
  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

export default function App() {
  const [inputText, setInputText] = useState<string>(defaultInput);

  return (
    <>
      <main className=" text-slate-800 text-center w-[100%]">
        <div className="text-5xl mb-4 mt-2 pb-4 pt-2 bg-slate-400 rounded-md w-[80%] my-0 mx-auto shadow-md shadow-slate-800 font-bold font-mono cursor-default">
          My Markdown Previewer
        </div>
        <section
          id="app-wrap"
          className="w-[80%] flex flex-row justify-around mb-8 mx-auto"
        >
          <div
            id="editor-wrap"
            className="mr-2 w-1/2 shadow-md shadow-slate-800 mb-0"
          >
            <div className="bg-slate-400 py-2 text-3xl rounded-t-md font-semibold font-mono cursor-default">
              Markdown Input
            </div>
            <textarea
              name="editor"
              id="editor"
              onChange={(e) => setInputText(e.target.value)}
              className="bg-slate-300 text-slate-900 text-lg resize-none outline-none px-2 py-2 rounded-b-md min-w-[100%] min-h-screen"
              value={inputText}
            />
          </div>
          <div
            id="output-wrap"
            className="ml-2 w-1/2 shadow-md shadow-slate-800"
          >
            <div className="bg-slate-400 py-2 text-3xl rounded-t-md font-semibold font-mono cursor-default">
              Markdown Output
            </div>
            <div
              id="preview"
              className="prose prose-slate bg-slate-300 text-left text-lg text-slate-900 overflow-y-auto outline-none px-2 py-2 rounded-b-md min-w-[100%] max-h-screen min-h-screen"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {inputText}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
