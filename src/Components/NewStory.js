import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

import BlockStyleControls from "./RichText/BlockStyleControls";
import InlineStyleControls from "./RichText/InlineStyleControls";

import "../RichText.css";

export default class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      body: "",
      done: "no",
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
    const contentState = this.state.editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    this.state.title && this.state.body
      ? this.setState({ done: "done" })
      : console.log(
          "Made by Zonayed Ahmed, My portfolio: https://www.zonayed.me"
        );
    this.setState({ body: html });
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleSubmit() {
    const { title, body } = this.state;
    if (title && body) {
      // Check if both title and body are not empty
      let newStory = { id: uuidv1(), title, body, bookmark: false };
      this.props.handleSubmission(newStory);
      this.setState({
        editorState: EditorState.createEmpty(),
        title: "",
        body: "",
        done: "submitted",
      });
    } else {
      alert("Please fill in both the Title and Tell your story fields.");
    }
  }

  render() {
    const { editorState } = this.state;
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    const { title, done } = this.state;

    return (
      <div
        className="richtext-editor"
        style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
      >
        <input
          type="text"
          className="input-title"
          value={title}
          onChange={(e) => this.setState({ title: e.target.value })}
          placeholder="Title"
          style={{
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            padding: "8px",
          }}
          required // Added required attribute
        />

        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div
          className={className}
          onClick={this.focus}
          style={{
            border: "1px solid #ccc",
            minHeight: "200px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Editor
            blockStyleFn={getBlockStyle}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Tell your story..."
            ref="editor"
            spellCheck={true}
            style={{ color: "#333", fontSize: "14px" }}
            required
          />
        </div>
        {done === "done" ? (
          <button
            onClick={this.handleSubmit}
            className="btn btn-submit"
            style={{
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        ) : done === "submitted" ? (
          <span className="msg-success">Your story has been submitted</span>
        ) : (
          <span className="msg-error">
            You haven't finished writing your story
          </span>
        )}
        <div className="richtext-editor" style={{ marginTop: "20px" }}>
          {/* Your existing content */}
          <footer
            className="footer"
            style={{ textAlign: "center", fontSize: "14px", color: "#888" }}
          >
            &copy; 2024 Your Company Name
          </footer>
        </div>
      </div>
    );

    function getBlockStyle(block) {
      switch (block.getType()) {
        case "blockquote":
          return "RichEditor-blockquote";
        default:
          return null;
      }
    }
  }
}
