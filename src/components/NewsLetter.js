import React, { Component } from 'react';

class NewsLetter extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onClick = () =>{
        let email = this.state.email;
        this.props.onClick?this.props.onClick(email): alert('No function passed');
    }
    render() {
        console.log(this.state.email);
        const {email} = this.state;
        return (
            <div className="col-3">
              <div className={this.props.position?"width-90 margin-auto padding-all-10 " + this.props.position : "width-90 margin-auto padding-all-10"}>
                <p className="uppercase font-20">newsletter</p><hr />
                <p className="margin-top-10">Email Address</p>
                <div className="margin-top-10">
                  <input type="text" placeholder="Email address" name="email" value={email} onChange={(e)=>this.onChange(e)} />
                  <button onClick={()=>this.onClick()} className="ghost margin-top-20 white-text  red-bg">Subscribe</button>
                </div>
              </div>
            </div>
        );
    }
}

export default NewsLetter;