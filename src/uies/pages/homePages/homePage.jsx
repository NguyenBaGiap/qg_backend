import React from 'react';
import { Form, Field, reduxForm } from 'redux-form'
import Loading from 'Templates/organisms/loading'
import SimpleTextField from  'Templates/atoms/simpleTextField'
import SimpleButtonField from  'Templates/atoms/simpleButtonField'
import SimpleAutoComplete from  'Templates/atoms/simpleAutoComplete'
import { sleep } from "Utilities/sleep";
import _ from 'lodash'
import SimpleCardDetail from "Templates/molecules/simpleCardDetail";
import testImg1 from 'Static/images/xeko.jpg'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import test from 'Static/images/chaien.gif'
import { styles } from "Templates/pages/homePages/homePageStyle";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        await this.props.fetchUsersGithub({
            q: 'ALL'
        })
    }

    fetchUsersGithubDebounce = _.debounce(async value => {
        await this.props.fetchUsersGithub({
            q: value
        })
    }, 1000)

    handleOnchangeLogin = (value) => {
        this.props.change('login', value.label)
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
                            style={styles.root}
                            onChangeAsync={this.fetchUsersGithubDebounce}
                            onChangeValue={this.handleOnchangeLogin}
                            loading={isLoading}
                        />

                    </div>
                    <div>
                        <Field
                            name={'submit'}
                            component={SimpleButtonField}
                            type={'submit'}
                            color={'primary'}
                            variant={'contained'}
                            label={'Search'}
                            style={{ marginRight : '5px'}}
                            loading={isLoading}
                            disabled={pristine || submitting}
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
                <SimpleCardDetail
                    style={styles.cards}
                    image={testImg1}
                    content={{
                        title:' VPBank Cashback Mastercard Debit',
                        detail: 'Hoàn tiền 0.8% không giới hạn'
                    }}
                />
                <Loading visible={isLoading} />
                <div>
                    { userData.map((item,index)=> (
                        <React.Fragment key={index}>
                            <p> Name: { item.login}</p>
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
    console.log("values", values)
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
const HomePageComponent = reduxForm({
    form: 'HomeForm', // a unique identifier for this form,
    enableReinitialize: true,
    // keepDirtyOnReinitialize:true,
    // asyncValidate,
    // asyncChangeFields: ['name'],
    validate
})(HomePage)

export default withStyles(styles)(HomePageComponent)

