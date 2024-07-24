import Input from './FormComponents/Input.tsx'
import Textarea from "./FormComponents/Textarea.tsx";
import Select, {SelectOption, SelectProps} from "./FormComponents/Select.tsx";
import Radiobutton, {RadiobuttonOption, RadiobuttonProps} from "./FormComponents/Radiobutton.tsx";
import Checkbox, {CheckboxOption, CheckboxProps} from "./FormComponents/Ckeckbox.tsx";

interface FormikControlProps {
  control: string
  type?: string
  label: string
  name: string
    placeholder?: string
    options?: SelectOption[] | RadiobuttonOption[] | CheckboxOption[]
    [key: string]: unknown
}

const FormikControl = ({control, ...rest}: FormikControlProps) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...(rest as SelectProps )} />
        case 'radio':
            return <Radiobutton {...(rest as RadiobuttonProps )} />
        case 'checkbox':
            return <Checkbox {...(rest as CheckboxProps )} />
        case 'date':
        default:
            return null
    }
}

export default FormikControl