
function Element({element}) {
  return (
    <div className="text-center p-5">
        <h2>{element.name}</h2>
        <img className="img-fluid rounded-pill" src={element.image} alt={element.name} />
        <p>{element.origin.name}</p>
    </div>
  );
}

export default Element;

/*
import PropTypes from 'prop-types';

function Element({element}) {
  return (
    <div>
        <h2>{element.name}</h2>
        <img src={element.image} alt={element.name} />
    </div>
  );
}

Element.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Element;
*/