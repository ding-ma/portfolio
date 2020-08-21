import React from 'react'
import {injectIntl} from 'react-intl'

const IntlTextBox = ({labelId, labelName, placeholderId, intl}) => (
    <textarea
        id={labelId}
        name={labelName}
        className=""
        rows={10} cols={75}
        tabIndex={0}
        spellCheck="true"
        placeholder={intl.formatMessage({id: placeholderId})}

    />
)

export default injectIntl(IntlTextBox)