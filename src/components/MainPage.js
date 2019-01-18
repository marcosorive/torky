import React from 'react';
import {Title} from './Title';
import {Footer} from './Footer';
import {Search} from './Search/Search';
import '../bootstrap.min.css';
import '../App.css';
export class MainPage extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="vertical-center">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-sm-12 align-self-center container-fluid search-container">
		                    <div class="row my-auto">
			                    <div class="col-sm-12 col-md-7 col-lg-6 mx-auto">
                                    <Title/>
                                    <Search/>
                                    <Footer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}

}