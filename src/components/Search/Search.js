import React from 'react'
import {SearchBar} from './SearchBar'
import { SearchResults } from './SearchResults';
export class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searched:false,
            newSearchToggle:false,
            query:undefined,
            platform:undefined,
        }
        this.searchButtonClick=this.searchButtonClick.bind(this);
    }

    searchButtonClick(data){
            this.setState({
                searched:true,
                query:data.query,
                platform:data.platform,
            })
            this.forceUpdate()
    }

    render(){
        if(! this.state.searched){
            return(
                <div className="fit-parent">
                    <SearchBar searchButtonClick={this.searchButtonClick}/>
                </div>
            )
        }else{
            return(
                <div className="fit-parent">
                    <SearchBar searchButtonClick={this.searchButtonClick}/>
                    <SearchResults query={this.state.query} platform={this.state.platform}/>
                </div>
            )
        }
    }
}