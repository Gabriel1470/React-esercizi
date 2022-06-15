import react from 'react';

export class Container extends react.Component{
    render(){

        return(
            <>
                <div className='stileDiv'>
                   <h1>{this.props.title}</h1>
                   { this.props.children}
                </div>
                
            </>
        )
    }
}