import * as React from 'react';
import TextField from '@material-ui/core/TextField/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

const SimpleTextFieldAsync = (props) => {
    const {
        name,
        label,
        meta: { touched, error, warning },
        input,
        style,
        loading
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
                InputProps={{
                    endAdornment: (
                        <React.Fragment>
                            {loading ? (
                                <CircularProgress color="inherit" size={20} />
                            ) : null}
                        </React.Fragment>
                    )
                }}
            />
        </React.Fragment>
    )
}
export default SimpleTextFieldAsync;
