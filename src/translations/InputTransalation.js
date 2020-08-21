import React from 'react'
import {injectIntl} from 'react-intl'

const IntlLabel = ({labelId, labelName, placeholderId, intl}) => (
    <input
        id={labelId}
        name={labelName}
        placeholder={intl.formatMessage({id: placeholderId})}
        maxLength={255} tabIndex={0}
        type="text"
    />
)

export default injectIntl(IntlLabel)
