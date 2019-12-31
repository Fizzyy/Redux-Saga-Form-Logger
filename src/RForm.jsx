import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';

function RForm(props) {
    const formdata = useSelector(state => state.form.testform);
    console.warn(formdata);

    return (
        <React.Fragment>
            <div>
                <label>Name: </label>
                <Field name="name" component="input" /><br />
                <label>Age: </label>
                <Field name="age" component="input" type="number" /><br />
                <label>Country: </label>
                <Field name="country" component={changeValue} /><br />
            </div>
            <p>{formdata.name}</p>
            <p>{formdata.age}</p>
            <p>{formdata.country}</p>
        </React.Fragment>
    );
}

const changeValue = (props) => {
    const {
        input: { value, onChange }
    } = props;

    return (
        <input value={value} onChange={onChange} type="text" />
    );
}

const data = {
    name: 'Oleg',
    age: 20,
    country: 'BLR'
}

export default reduxForm({
    form: 'testform',
    initialValues: data
})(RForm);