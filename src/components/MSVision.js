import React,{Component} from 'react';
import MSVisionManager from './MSVisionManager';

class MSVision extends Component{
    constructor(props){
        super(props);
        this.state={
            concepts:[]
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        MSVisionManager.callToVisionAPI(this.props.visionObject,(sucessResponse)=>{
            console.info(sucessResponse)
            this.setState({
                concepts:sucessResponse
            });
        },(errorResponse)=>{
            console.info(errorResponse)
        })
    }

    render(){

        const concepts = this.state.concepts;

        return(
            <div>
                <div>
                    <img src={this.props.visionObject.API_RESOURCE} alt="" width="400" height="300"/>
                </div>
                <button onClick={this.handleOnClick}>Call to V</button>
                <ul>
                {concepts.map((item,index)=>{
                    return (<li key={index}>{item}</li>);
                })}
                </ul>
            </div>
        );
    }
}


export default MSVision;