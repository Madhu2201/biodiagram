
import PropTypes from 'prop-types';
import '../Components/Diagram.css';

function DiagramDisplay({ selectedDiagram }) {
  const diagramMap = {
    'Plant Cell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPM4onIiyzCy41lPDXpyr3NbgewzQTmGsNfA&s',
    'Animal Cell': 'https://cdn1.byjus.com/wp-content/uploads/2023/07/animal-cell-july4.png',
    'Mitosis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LlivDAUMEW3JefP63urwvAEtXNNPKbRBdQ&s',
    'Meiosis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGCO3mfOdK3b2nM5BLhplOKYWTCxUuyAAvA&s',
    'DNA': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLE4bsG1Eof5XtSArRWsQDVNA_-fgE1i2Clg&s',
  };

  const diagramSrc = diagramMap[selectedDiagram];

  return (
    <div className="diagram-container">
      {diagramSrc ? (
        <img
          src={diagramSrc}
          alt={selectedDiagram}
          className="diagram-image"
        />
      ) : (
        <p>No diagram selected</p>
      )}
    </div>
  );
}

DiagramDisplay.propTypes = {
  selectedDiagram: PropTypes.string.isRequired,
};

export default DiagramDisplay;
