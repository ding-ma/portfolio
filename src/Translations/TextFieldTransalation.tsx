import React from 'react'
import {injectIntl} from 'react-intl'
import TextField from '@material-ui/core/TextField';

const IntlTextBox = ({labelId, labelName, placeholderId, onchange, intl}:
                         { labelId: string, labelName: string, placeholderId: string, onchange: React.ComponentState, intl: any }) => (
    <TextField
        variant="outlined"
        margin="normal"
        fullWidth={true}
        multiline={true}
        id={labelId}
        label={intl.formatMessage({id: placeholderId})}
        name={labelName}
        autoComplete={labelName}
        autoFocus
        onChange={onchange}
        required={true}
        rows={20}
    />
)

export default injectIntl(IntlTextBox)
