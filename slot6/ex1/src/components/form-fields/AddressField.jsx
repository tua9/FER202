// src/components/form-fields/AddressField.jsx

import { useId } from 'react'
import {
  Form, // ← Phải import Form để dùng Form.Control.Feedback
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import PropTypes from 'prop-types'

const AddressField = ({ value, onChange, error }) => {
  const id = useId()

  return (
    <FormGroup className='mb-3' controlId={id}>
      <FormLabel>Địa chỉ</FormLabel>
      <FormControl
        type='text'
        name='address'
        placeholder='Địa chỉ'
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      />
      {/* Sử dụng Form.Control.Feedback thay vì FormControlFeedback */}
      <Form.Control.Feedback type='invalid'>
        {error || 'Phải nhập 5 ký tự trở lên...'}
      </Form.Control.Feedback>
    </FormGroup>
  )
}

AddressField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default AddressField
