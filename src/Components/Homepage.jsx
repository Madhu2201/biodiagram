import PropTypes from 'prop-types'; 
import '../Components/Homepage.css'

const diagrams = ['Plant Cell', 'Animal Cell', 'Mitosis', 'Meiosis', 'DNA'];

function Homepage({ onDiagramSelect }) {
  return (
    <div className="homepage-container">
      <h2>Select a Diagram</h2>
      <ul>
        {diagrams.map((diagram) => (
          <li 
            key={diagram} 
            onClick={() => onDiagramSelect(diagram)}
            style={{ cursor: 'pointer', padding: '5px', listStyleType: 'none', textDecoration: 'underline' }}
          >
            {diagram}
          </li>
        ))}
      </ul>
    </div>
  );
}

Homepage.propTypes = {
  onDiagramSelect: PropTypes.func.isRequired, 
};

export default Homepage;