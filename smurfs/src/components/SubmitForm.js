import React, {component, Component} from 'react';
import axios from 'axios';

class SubmitForm extends Component {
constructor(props){
    super(props)

    this.state = {
        name: '',
        age: '',
        height: ''
    }
}

changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3333/smurfs', this.state)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

    render(){
        const {name, age, height} = this.state
        return (
            <form onSubmit={this.submitHandler}>
        <div>
            <input type='text' name='name' placeholder='Name' value={name} onChange={this.changeHandler}/>
        </div>
        <div>
            <input type='text' name='age' placeholder='Age' value={age} onChange={this.changeHandler}/>
        </div>
        <div>
            <input type='text' name='height' placeholder='Height' value={height} onChange={this.changeHandler}/>
        </div>
        <button type='submit'>Add to Smurfs</button>
    </form>
        )
    }
}

export default SubmitForm;