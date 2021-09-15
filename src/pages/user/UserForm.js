import React from 'react'
import { reduxForm, Field, submit } from 'redux-form'
import { connect } from 'react-redux';
import { submitUserAction } from '../actions/user/UserAction'

const UserFormFunction = props =>{
    const {handleSubmit} = props
    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit ((fields) => submit(fields, submitUserAction))}> 
            <label>
                Name
            </label>
            <Field 
                type="text"
                component="input"
                name="nome"/>

            <label>
                Email
            </label>
            <Field 
                type="text"
                component="input"
                name="email"/>
            <button type="submit">Submit</button>

        </form>
    );
}

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunction)

const mapState = state => ({

})

export default connect(mapState, {submitUserAction}) (UserForm)