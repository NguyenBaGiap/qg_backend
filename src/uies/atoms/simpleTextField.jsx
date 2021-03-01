import * as React from 'react';
import TextField from '@material-ui/core/TextField/TextField'
import CircularProgress from "@material-ui/core/CircularProgress";

const SimpleTextField = (props) => {
    const {
        name,
        label,
        meta: { touched, error, warning },
        input,
        style,
        loading,
        disabled
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
            disabled={disabled}
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
    )
}
export default SimpleTextField;
