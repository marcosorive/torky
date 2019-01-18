import React from 'react'
export class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            emptySearch:false,
            inputValue:undefined,
            platformValue:undefined,
        }
        this.handleQueryChange=this.handleQueryChange.bind(this)
        this.handlePlatformChange=this.handlePlatformChange.bind(this)
        this.handleKeyPress=this.handleKeyPress.bind(this)
    }

    handleKeyPress(e){
        if(e.key === 'Enter'){
            if(this.state.inputValue !== undefined){
                this.setState({
                    emptySearch:false
                })
                this.props.searchButtonClick({
                    query:this.state.inputValue,
                    platform:this.state.platformValue,
                })
            }else{
                this.setState({
                    emptySearch:true
                })
            }
            
          }
    }

    handleQueryChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }   
    handlePlatformChange(e){
        this.setState({
            platformValue:e.target.value
        })
    }   

    render(){
        if(this.state.emptySearch === false){
            return(
                <div className="input-group mt-5" onKeyPress={this.handleKeyPress}>
                        <input className="form-control border-secondary py-2" id="search-query" type="text" placeholder="Ej.: Super Smash Bros. Ultimate" onChange={this.handleQueryChange} value={this.state.inputValue}></input>
                        <div className="input-group-append">
                            <select  className="btn btn-outline-secondary" onChange={this.handlePlatformChange} value={this.state.platformValue}>
                                <option value="all" selected>Elige Plataforma</option>
                                <option value="all">Todas</option>
                                <option value="pc">PC</option>
                                <option value="nintendo">Nintendo</option>
                                <option value="playstation">Playstation</option>
                                <option value="xbox">Xbox</option>
                            </select>
                        </div>
                </div>
            )
        }else{
            return(
                <div>
                <div className="input-group mt-5" onKeyPress={this.handleKeyPress}>
                        <input className="form-control border-danger py-2" id="search-query" type="text" placeholder="Ej.: Super Smash Bros. Ultimate" onChange={this.handleQueryChange} value={this.state.inputValue}></input>
                        <div className="input-group-append">
                            <select  className="btn btn-outline-secondary" onChange={this.handlePlatformChange} value={this.state.platformValue}>
                                <option value="0" selected>Elige Plataforma</option>
                                <option value="all">Todas</option>
                                <option value="pc">PC</option>
                                <option value="nintendo">Nintendo</option>
                                <option value="playstation">Playstation</option>
                                <option value="xbox">Xbox</option>
                            </select>
                        </div>
                        
                </div>
                <div class="text-center mt-4 text-danger">
				Debes rellenar el campo de búsqueda</div>
                </div>
            )
        }
    }
}