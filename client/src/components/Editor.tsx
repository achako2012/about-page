import React from 'react'
import {ContentState, convertFromRaw, convertToRaw, Editor, EditorState, RichUtils} from 'draft-js'
import {stateToHTML} from "draft-js-export-html";

type Props = {
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

        console.log(stateToHTML(editorState.getCurrentContent()));
    }

    async onSaveClick() {
        console.log('save button')
        const editorState = this.state.editorState
        const article = convertToRaw(editorState.getCurrentContent())
        const html = stateToHTML(editorState.getCurrentContent())
        await this.props.articlesService.postArticles('lol', JSON.stringify(article), JSON.stringify(html))
    }

    render() {

        return (
            <>
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}/>
            </>
        );
    }
}