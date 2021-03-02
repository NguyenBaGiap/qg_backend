import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SimpleAutoComplete(props) {
    const {
        label,
        variant,
        options,
        style,
        loading,
        onChangeAsync,
        onChangeValue
    } = props

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            style={style}
            loading={loading}
            onChange={(event, value)=>{
                if(onChangeValue !== undefined && typeof onChangeValue === 'function'){
                    onChangeValue(value)
                }
            }}
            getOptionSelected={(option, value) => option.id === value.id}
            renderInput={(params) =>
                <TextField
                    {...params}
                    label={label}
                    variant={variant || "outlined"}
                    onChange={ev => {
                        if (ev.target.value !== "" || ev.target.value !== undefined) {
                            onChangeAsync(ev.target.value);
                        }
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />}
        />
    );
}
