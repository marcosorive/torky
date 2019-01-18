import React from 'react';
import {ConcreteSearchResult} from './ConcreteSearchResult';
export class ConcreteSearchResultsBuilder extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        switch(this.props.platform){
            case "all":
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/>
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                        <ConcreteSearchResult query={this.props.query} store="steam" verboseStore="Steam"/>
                        <ConcreteSearchResult query={this.props.query} store="nintendo" verboseStore="Nintendo eShop"/>
                        <ConcreteSearchResult query={this.props.query} store="playstation" verboseStore="Playstation Store"/>
                        <ConcreteSearchResult query={this.props.query} store="xbox" verboseStore="Xbox"/>
                    </div>
                    )
            case "pc":
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="steam" verboseStore="Steam"/>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/>
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                        
                    </div>
                    )
            case "nintendo":
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="nintendo" verboseStore="Nintendo eShop"/>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/>
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                    </div>
                    )
            case "playstation":
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="playstation" verboseStore="Playstation Store"/>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/>
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                    </div>
                    )
            case "xbox":
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="xbox" verboseStore="Xbox"/>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/>
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                    </div>
                    )
            default:
                return(
                    <div>
                        <ConcreteSearchResult query={this.props.query} store="amazon" verboseStore="Amazon"/>
                        <ConcreteSearchResult query={this.props.query} store="fnac" verboseStore="Fnac"/>
                        {/* <ConcreteSearchResult query={this.props.query} store="game" verboseStore="Game"/> */}
                        <ConcreteSearchResult query={this.props.query} store="corte_ingles" verboseStore="El corte inglés"/>
                        <ConcreteSearchResult query={this.props.query} store="instant_gaming" verboseStore="Instant Gaming"/>
                    </div>
                    )
        }
    }
}