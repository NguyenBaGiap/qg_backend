import React from 'react';
import { Form, Field, reduxForm } from 'redux-form'
import Loading from 'Templates/organisms/loading'


class HomePage extends React.Component {
    async componentDidMount() {
        await this.props.fetchUsersGithub({
            q: 'ALL'
        })
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, onSubmit, data, isLoading } = this.props
        return(
            <React.Fragment>
                <Form  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>First Name</label>
                        <div>
                            <Field
                                name="login"
                                component="input"
                                type="text"
                                placeholder="search user..."
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </Form>
                <br />
                <Loading visible={isLoading} />
                <div>
                    { data.map((item,index)=> (
                        <React.Fragment key={index}>
                            <p> Login: { item.login}</p>
                            <a href={item.url} > { item.url} </a>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if(values.login === 'lon'){
        errors.login = 'Từ khóa bị cấm'
    }
    return errors;
}

export default reduxForm({
    form: 'HomeForm', // a unique identifier for this form,
    validate
})(HomePage)
//export default HomePage
