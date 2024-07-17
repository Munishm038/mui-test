import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

export const CustomSelect = ({ data, selectBy, id, placeholder }) => {

    const defaultProps = {
        options: data,
        getOptionLabel: (option) => typeof (option) === 'string' ? option : option[selectBy],
    };

    return <Autocomplete
        {...defaultProps}
        id={id}
        key={id}
        disableCloseOnSelect
        style={{ marginTop: 24}}
        className='input'
        renderInput={(params) => (
            <TextField {...params} label="" variant="standard" placeholder={placeholder} style={{ paddingBottom: 9 }} />
        )}
    />

}