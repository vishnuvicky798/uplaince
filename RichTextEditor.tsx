import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <button onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))}>
        Bold
      </button>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default RichTextEditor;
