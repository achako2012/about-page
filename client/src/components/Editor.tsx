import React from 'react'
import {convertFromRaw, Editor, EditorState, RichUtils} from 'draft-js'
import {Button} from "reactstrap";
import ArticlesService from "../api/services/articles-service";

type Props = {
    updateArticles(article: any): void
    entity?: any
}

type State = {
    editorState?: any
};

export default class MyEditor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        };

    }

    async componentDidMount() {
        if (this.props.entity) {
            console.log('props here')
            this.setState({editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.entity)))})
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
                <div className="form-control">
                    <Button outline color="secondary" onClick={this.onBoldClick.bind(this)}>Bold</Button>
                    <Button outline color="secondary" onClick={this.onCodeClick.bind(this)}>Code</Button>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}/>
                </div>
                <Button id="save-article-btn" color="primary" onClick={this.onSaveClick.bind(this)}>save the
                    article</Button>
            </>
        );
    }
}