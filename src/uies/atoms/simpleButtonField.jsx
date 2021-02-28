import * as React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'

const SimpleButtonField = props => {
    const {
        type,
        color,
        variant,
        disabled,
        label,
        onClick,
        style,
        loading
    } = props;
    return (
        <Button
            type={type}
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            { label }
            &nbsp;
            {loading && <CircularProgress size={16} color="secondary" />}
        </Button>
    )
}

export default SimpleButtonField