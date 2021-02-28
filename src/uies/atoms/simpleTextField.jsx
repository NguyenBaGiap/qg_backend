import * as React from 'react';
import TextField from '@material-ui/core/TextField/TextField'

const SimpleTextField = (props) => {
    const {
        name,
        label,
        meta: { touched, error, warning },
        input,
        style
    } = props;
    return(
        <TextField
            name={name}
            className={style}
            multiline
            error={touched && (!!error || !!warning)}
            {...input}
            helperText={(touched && (error || warning)) || ''}
            InputLabelProps={{
                shrink: true
            }}
            label={label}
        />
    )
}
export default SimpleTextField;