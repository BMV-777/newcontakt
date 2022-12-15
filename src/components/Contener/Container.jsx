import PropTypes from 'prop-types';
import './Contaner.modul.css';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
