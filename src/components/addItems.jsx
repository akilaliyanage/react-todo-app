import React, { Component } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { FormControl, TextField, Button } from '@material-ui/core';


class AddItems extends Component {
    state = { 
        title:''
    }
    
    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            alert('⚠ Empty field, Insert a valid action ⚠');
        }
        else {
            this.props.addItems(this.state.title);
            this.state.title = '';
        }
       
    }
    render() { 
        return ( 
            <div>
                <form action="" method="get" onSubmit={this.onSubmit}>
                    <FormControl style={formstyle} action="akila.css">
                        <FormLabel>You can add items here : </FormLabel>

                        <TextField
                            id=""
                            label=""
                            name="title"
                           onChange={this.change}
                            value={this.state.title}
                            margin="dense"

                        />
                        <Button variant="text" color="default" type="submit" variant="contained">
                            Submit
                    </Button>
                    </FormControl>
                </form>
            </div>
         );
    }
}

const formstyle = {
    //disply: 'flex',
    //flexDirection: 'row',
    padding: '10px',
    marginLeft: '10px',
}
 
export default AddItems;