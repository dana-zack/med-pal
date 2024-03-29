import './SavedCard.css';
import PropTypes from 'prop-types';

function SavedCard({ name, quantity, frequency }) {
  return (
    <article className='saved-card'>
      <p className='saved name'>{name}</p>
      <p className='saved'>Quantity: {quantity}</p>
      <p className='saved'>Frequency: {frequency}</p>
    </article>
  );
}

export default SavedCard;

SavedCard.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired
};