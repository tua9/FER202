// src/components/form-fields/AirportSelect.jsx

import { POPULAR_AIRPORTS } from '../constants/airports' // giữ nguyên nếu bạn đã tách

import {
  Form, // ← Bắt buộc import Form để dùng Form.Control.Feedback
  FormGroup,
  FormLabel,
  FormSelect,
} from 'react-bootstrap'

import PropTypes from 'prop-types'

const AirportSelect = ({ label, name, value, onChange, error, controlId }) => {
  return (
    <FormGroup controlId={controlId}>
      <FormLabel>{label}</FormLabel>
      <FormSelect
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      >
        {POPULAR_AIRPORTS.map((airport) => (
          <option key={airport.code} value={airport.name}>
            {airport.name}
          </option>
        ))}
      </FormSelect>

      {/* Sửa đúng cách: dùng Form.Control.Feedback */}
      {error && (
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      )}
    </FormGroup>
  )
}

AirportSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  controlId: PropTypes.string.isRequired,
}

export default AirportSelect
