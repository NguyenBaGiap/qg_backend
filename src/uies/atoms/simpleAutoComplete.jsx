import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SimpleAutoComplete(props) {
    const {
        label,
        variant,
        options,
        style,
        loading
    } = props
    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            style={style}
            loading={loading}
            renderInput={(params) =>
                <TextField
                    {...params}
                    label={label}
                    variant={variant || "outlined"}
                />}
        />
    );
}