import React from 'react'

export class ConcreteSearchResult extends React.Component{

    constructor(props){
        super(props)
        this.state={
            query:this.props.query,
            store:this.props.store,
            isLoaded:false,
            results:undefined,
            error:undefined
        }
        this.fetchApiResults = this.fetchApiResults.bind(this);
    }

    async fetchApiResults(){
        try{
            let response = await fetch("http://torky.herokuapp.com/api/search/"+this.props.query+"/"+this.props.store,{
                mode:"cors",
            });
            if(response.ok){
                this.setState({
                    isLoaded:true,
                    results: await response.json(),
                })
            }else{
                this.setState({
                    isLoaded:true,
                    error:response.error,
                })
            }
        }
        catch(error){
            this.setState({
                isLoaded:true,
                error:error.message,
            })
        }
    }

    async componentDidMount(){
        await this.fetchApiResults()
    }

    async componentDidUpdate(){
        if( this.props.query !== this.state.query || this.props.store !== this.state.store){
            this.setState({
                    query:this.props.query,
                    store:this.props.store,
                    isLoaded:false,
                    results:undefined,
                    error:undefined
                
            })
            await this.fetchApiResults();
        }
    }
    render(){
        if( ! this.state.isLoaded){
            return(                
                <li className="list-group-item">
                    <span className="store-style">{this.props.verboseStore}</span>
                    <div>
                        <div className="lds-css ng-scope"><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                    </div>
                </li>
            )
        }else if(this.state.error){
            return(
                <li className="list-group-item">
                    <span className="store-style">{this.props.verboseStore}</span>
                    <div>No se ha podido encontrar el precio</div>
                </li>
            )
        }else{
            let res=this.state.results;
            return(
                <li className="list-group-item">
                    <span className="store-style">{this.props.verboseStore}</span>
				    <ul>
				    <li>{res.gamename}</li>
				    <li>Precio: {res.price}  - <a href={res.url} target="_blank" rel="noopener noreferrer">Comprar</a></li>
				    </ul>
			    </li>
            )
        }
        
    }
}