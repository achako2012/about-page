import {Progress} from "reactstrap";
import '../app.css'
import React, {Component} from "react";
import {Spinner} from "./Spinner";
import '../styles/Skills.css'

//TODO add type
type SkillsProps = {
    skillsService: any
}

export default class Skills extends Component<SkillsProps> {

    state = {
        skillsList: null
    }

    async componentDidMount() {
        const skillsList = await this.props.skillsService.getSkills()
        await this.setState({skillsList})
    }

    getColor(value:any) {
        if (value > 7 && value < 11) {
            return 'success'
        } else if (value > 4 && value < 8) {
            return 'warning'
        } else {
            return 'danger'
        }
    }

    //TODO Create types for articles array
    renderSkills(arr:any) {
        return arr.map((item:any) => {
            const {_id, ...skills} = item
            const color = this.getColor(skills.value)
            return (
                <div key={_id}>
                    <div className="text-center">{skills.title}</div>
                    <Progress value={skills.value} max="10" color={color}/>
                </div>
            )
        })
    }

    render() {

        const {skillsList} = this.state

        if (!skillsList) {
            return <Spinner/>
        }

        const items = this.renderSkills(skillsList)

        //TODO Create function for list rendering
        return (
            <section className='skills-section'>
                <div className='row'>
                    <div className='skills'>
                        <div className='skills-title'>
                            <h1>My skills</h1>
                        </div>
                        <div className='skills-container'>
                            <div className='core-skills'>
                                <div className='skills-progress'>
                                    {items[0]}
                                    {items[1]}
                                    {items[2]}
                                    {items[3]}
                                </div>
                            </div>
                            <div className='soft-skills'>
                                <div className='skills-progress'>
                                    {items[4]}
                                    {items[5]}
                                    {items[6]}
                                    {items[7]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}