import React from 'react'
import {convertToRaw, Editor, EditorState, RawDraftContentState, RichUtils} from 'draft-js'
import {stateToHTML} from "draft-js-export-html";

type Props = {
    updateArticles(article: any): void
    articlesService: any
}

type State = {
    editorState?: any
    articles?: any
};

export default class MyEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState: EditorState) => {
        this.setState({
            editorState
        });
    }

    async onSaveClick() {
        const editorState = await this.state.editorState
        const articleEntity = convertToRaw(editorState.getCurrentContent())
        const html = stateToHTML(editorState.getCurrentContent())
        const article = await this.props.articlesService.postArticles('lol', JSON.stringify(articleEntity), html)
        this.props.updateArticles(article)
    }

    onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onCodeClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }

    render() {
        return (
            <>
                <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                <button onClick={this.onCodeClick.bind(this)}>Code</button>
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}/>
            </>
        );
    }
}