import React, {Component} from 'react';
import {injectIntl} from 'react-intl'
import TextField from '@material-ui/core/TextField';
import {
    withStyles
} from '@material-ui/core/styles';


interface IProps {
    isBox:boolean
    intl: any
    labelId: string
    labelName: string
    placeholderId: string
    onchange: React.ComponentState,
}

interface IState {
}

const InputLabel = withStyles({
    root: {
        '& input + fieldset ': {
            borderColor: '#edebca',
            borderWidth: 2,
        },
        '& input:invalid:focus + fieldset': {
            borderColor: '#b0a200',
            borderWidth: 2,
        },
        '& textarea + fieldset': {
            borderColor: '#edebca',
            borderWidth: 2,
        },
        '& textarea:invalid:focus + fieldset': {
            borderColor: '#b0a200',
            borderWidth: 2,
        }
    },
})(TextField);

class IntlLabel extends Component<IProps, IState>{
    render() {
        const {labelId,labelName,intl,onchange,placeholderId, isBox} = this.props
        if (!isBox){
            return(
                <InputLabel
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id={labelId}
                    label={intl.formatMessage({id: placeholderId})}
                    name={labelName}
                    autoComplete={labelName}
                    onChange={onchange}
                />
            )
        } else {
            return (
                <InputLabel
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id={labelId}
                    label={intl.formatMessage({id: placeholderId})}
                    name={labelName}
                    autoComplete={labelName}
                    onChange={onchange}
                    rows={20}
                    multiline={true}
                />
            )
        }
    }

}

export default injectIntl(IntlLabel)
