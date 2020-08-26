import React from 'react'
import {injectIntl} from 'react-intl'

const IntlLabel = ({labelId, labelName, placeholderId, intl}:
                       { labelId: string, labelName: string, placeholderId: string, intl: any }) => (
    <input
        id={labelId}
        name={labelName}
        placeholder={intl.formatMessage({id: placeholderId})}
        maxLength={255} tabIndex={0}
        className="form-control"
        type="text"
    />
)

export default injectIntl(IntlLabel)
