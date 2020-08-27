import React from 'react'
import {injectIntl} from 'react-intl'
import TextField from '@material-ui/core/TextField';

const IntlLabel = ({labelId, labelName, placeholderId, onchange, intl}:
                       { labelId: string, labelName: string, placeholderId: string, onchange: React.ComponentState, intl: any }) => (
    <TextField
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
        id={labelId}
        label={intl.formatMessage({id: placeholderId})}
        name={labelName}
        autoComplete={labelName}
        autoFocus
        onChange={onchange}

    />
)

export default injectIntl(IntlLabel)
