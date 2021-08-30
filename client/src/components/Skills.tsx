import {Progress} from "reactstrap";
import './app.css'
import React, {Component} from "react";
import {Spinner} from "./Spinner";
import GetHooks from "../api/getHooks";

type SkillsProps = {
    getSkills: any
}

export default class Skills extends Component<SkillsProps> {

    constructor(props: SkillsProps) {
        super(props);
    }

    state = {
        skillsList: null
    }

    getHooks = new GetHooks()

    componentDidMount() {
        this.getHooks.getSkillList().then(skillsList=>{
            this.setState({skillsList})
        })

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

    renderItems(arr:any) {
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

        const items = this.renderItems(skillsList)


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