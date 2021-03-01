import React from 'react';
import { Form, Field, reduxForm } from 'redux-form'
import Loading from 'Templates/organisms/loading'
import SimpleTextField from  'Templates/atoms/simpleTextField'
import SimpleButtonField from  'Templates/atoms/simpleButtonField'
import SimpleAutoComplete from  'Templates/atoms/simpleAutoComplete'
import SimpleTextFieldAsync from "Templates/organisms/simpleTextFieldAsync";
import classes from './homePage.scss'
import { sleep } from "Utilities/sleep";
import _ from 'lodash'

class HomePage extends React.Component {
    async componentDidMount() {
        // await this.props.fetchUsersGithub({
        //     q: 'ALL'
        // })
    }

    fetchUsersGithubDebounce = _.debounce(async value => {
        await this.props.fetchUsersGithub({
            q: value
        })
    }, 1000)

    onChangeHandleField = (value) => {
        this.fetchUsersGithubDebounce(value)
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, onSubmit, userData, isLoading } = this.props
        return(
            <React.Fragment>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ marginBottom: '10px'}}>
                        <Field
                            name="login"
                            component={SimpleAutoComplete}
                            options={userData.map( item => {
                                return {
                                    label: item.login
                                }
                            })}
                            label={'User Login'}
                            style={{ width: '300'}}
                            onChangeHandle={this.onChangeHandleField}
                            loading={isLoading}
                        />
                        {/*<Field*/}
                        {/*    name="login"*/}
                        {/*    type="text"*/}
                        {/*    component={SimpleTextField}*/}
                        {/*    label={'User Login'}*/}
                        {/*    style={'textField'}*/}
                        {/*/>*/}
                    </div>
                    <div>
                        <Field
                            name={'submit'}
                            component={SimpleButtonField}
                            type={'submit'}
                            color={'primary'}
                            variant={'contained'}
                            label={'Search'}
                            style={{marginRight : '5px'}}
                            loading={isLoading}
                        />
                        <Field
                            name={'clear'}
                            component={SimpleButtonField}
                            type={'button'}
                            color={'secondary'}
                            variant={'contained'}
                            label={'Clear Value'}
                            onClick={reset}
                        />
                    </div>
                </Form>
                <br />
                <Loading visible={isLoading} />
                <div>
                    { userData.map((item,index)=> (
                        <React.Fragment key={index}>
                            <p className={classes.textRed}> Name: { item.login}</p>
                            <a href={item.url} > { item.url} </a>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

const validate = async (values, props) => {
    const errors = {};

    return errors;
}
const asyncValidate = (values, dispatch, props, field)=> {
    // deocokdgmdf
    return sleep(1000).then(async () => {
        if (values.login) {
            await props.fetchUsersGithub({
                q: values.login
            })
            if(props.data.length === 0){
                console.log(' not found data')
                throw { login: 'That name not found' }
            }
        }
    })
}
export default reduxForm({
    form: 'HomeForm', // a unique identifier for this form,
    enableReinitialize: false,
    // asyncValidate,
   // asyncChangeFields: ['name'],
    validate
})(HomePage)

