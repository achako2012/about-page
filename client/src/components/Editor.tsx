import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'

type Props = {
    updateArticles(article: any): void
    articlesService?: any
}

type State = {
    editorState?: any
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
        const {editorState} = await this.state

        this.props.updateArticles(editorState)
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
                <div>
                    <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                    <button onClick={this.onCodeClick.bind(this)}>Code</button>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}/>
                </div>
            </>
        );
    }
}