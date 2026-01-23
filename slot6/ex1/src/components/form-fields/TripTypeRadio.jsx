import { FormGroup, FormLabel, FormCheck } from 'react-bootstrap'
import PropTypes from 'prop-types'

const TripTypeRadio = ({ value, onChange }) => {
  return (
    <FormGroup className='mb-4'>
      <FormLabel>Chọn chiều (Đi/Khứ hồi)</FormLabel>
      <div>
        <FormCheck
          inline
          type='radio'
          id='oneWay'
          label='Đi'
          name='tripType'
          value='oneWay'
          checked={value === 'oneWay'}
          onChange={onChange}
        />
        <FormCheck
          inline
          type='radio'
          id='roundTrip'
          label='Về'
          name='tripType'
          value='roundTrip'
          checked={value === 'roundTrip'}
          onChange={onChange}
        />
      </div>
    </FormGroup>
  )
}

TripTypeRadio.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TripTypeRadio
