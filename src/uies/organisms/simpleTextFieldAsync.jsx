import * as React from 'react';
import TextField from '@material-ui/core/TextField/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

const SimpleTextFieldAsync = (props) => {
    const {
        name,
        label,
        meta: { touched, error, warning },
        input,
        style
    } = props;
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default SimpleTextFieldAsync;