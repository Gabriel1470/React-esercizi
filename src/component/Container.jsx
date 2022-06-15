import react from 'react';

export class Container extends react.Component{
    render(){

        return(
            <>
                <div className='stileDiv'>
                   { this.props.children}
                </div>
            </>
        )
    }
}