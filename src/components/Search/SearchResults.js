import React from 'react';
import {ConcreteSearchResultsBuilder} from './ConcreteSearchResultsBuilder';
export class SearchResults extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            query:this.props.query,
            platform:this.props.platform,
        }

    }

    

    render(){
        return(
            <div className="container-fluid results-container">
                <div class="row my-5">
			        <div class="col-sm-12 mx-auto" >
				        <div class="card">
				            <h3 class="card-header indigo text-white">Resultados para: {this.props.query}</h3>
                            <ul class="list-group list-group-flush">
                                <ConcreteSearchResultsBuilder query={this.props.query} platform={this.props.platform}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}