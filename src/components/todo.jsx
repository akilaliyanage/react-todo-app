import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class Todo extends Component {
    state = {}
    
    cut = () => {
        return {
            textDecoration: this.props.todo.status ? 'line-through' : 'none',
            marginLeft:'10px'
        };
    }
    render() { 
        return ( 
            <div style={style}>
                <FormControlLabel
                  label=""
                  control={
                    <Checkbox
                      value=""
                      onChange={this.props.click.bind(this, this.props.todo.id)}
                          color="primary"
                          style={check}
                    />
                  }
                />
                <Typography align="justify" variant="button" color="primary"><span style={this.cut()}>{this.props.todo.value}</span></Typography>
                <Button onClick={this.props.remove.bind(this, this.props.todo.id)} style={button} variant="contained" color="secondary">
                    X
                </Button>
                
            </div>
         );
    }
}

const style = {
    backgroundColor: '#e5e5e5',
    color: 'black',
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    verticleAlign: 'middle',
   // marginLeft:'10px'
    //width: '100%',
    //margin:'5px'
}

const button = {
    float: 'right',
    marginLeft : 'auto'
}

const check = {
    marginLeft : '10px'
}
 
export default Todo;