import { Formik, Form } from 'formik'
import FormikControl from "./FormikControl.tsx"
import * as Yup from 'yup'
import {RadiobuttonOption} from "./FormComponents/Radiobutton.tsx";


interface Values {
    email: '',
    description: ''
    selectOption: '',
    radioOption: ''
    checkboxOption: [],
    date: null
}

export const radioOption: RadiobuttonOption[] = [
    {key: 'Radio Option 1', value: 'radio1'},
    {key: 'Radio Option 2', value: 'radio2'},
    {key: 'Radio Option 3', value: 'radio3'},
]

const selectOptions: {key: string, value: string}[] = [{
    key: 'Select an option',
    value: ''
}, {
    key: 'Option 1',
    value: 'option1'
}, {
    key: 'Option 2',
    value: 'option2'
}, {
    key: 'Option 3',
    value: 'option3'
}]

const checkboxOptions: {key: string, value: string}[] = [{
    key: 'Checkbox Option 1',
    value: 'checkbox1'
}, {
    key: 'Checkbox Option 2',
    value: 'checkbox2'
}, {
    key: 'Checkbox Option 3',
    value: 'checkbox3'
}]

const initialValues: Values = {
  email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    date: null
}
const  validationSchema = Yup.object({
  email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().min(1, 'Required'),
    date: Yup.mixed().required('Required')
})
const handleSubmit = (values: Values) => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
}
const FormikContainer = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
            <Form>
                <FormikControl control='input' type='email' label='Email' name='email' />
                <FormikControl control='textarea' label='Description' name='description' placeholder='Add description' />
                <FormikControl control='select' label='Select a topic' name='selectOption' options={selectOptions} />
                <FormikControl control='radio' label='Radio group' name='radioOption' options={radioOption} />
                <FormikControl control='checkbox' label='Checkbox group' name='checkboxOption' options={checkboxOptions} />
                <FormikControl control='date' label='Pick a date' name='date' placeholder="Pick a date" />
                <button type='submit'>Submit</button>
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer