
import { useState } from 'react';
import { Stage, Layer, Text, Arrow, Line } from 'react-konva';
import DiagramDisplay from './DiagramDisplay';
import PropTypes from 'prop-types'; 
import '../Components/Label.css';

function LabelingTool({ selectedDiagram }) {
  const [labels, setLabels] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [lines, setLines] = useState([]);
  const [newLabelText, setNewLabelText] = useState('');
  const [drawingMode, setDrawingMode] = useState('label');

  const handleAddLabel = () => {
    if (newLabelText.trim() !== '' && drawingMode === 'label') {
      setLabels([...labels, { text: newLabelText, x: 50, y: 50 }]); 
      setNewLabelText('');
    }
  };
  const handleAddArrow = () => {
    if (drawingMode === 'arrow') {
      setArrows([...arrows, { points: [50, 50, 150, 150] }]); 
    }
  };

  const handleDrawLine = () => {
    if (drawingMode === 'line') {
      setLines([...lines, { points: [100, 100, 200, 200] }]); 
    }
  };

  const handleLabelPositionChange = (e, index) => {
    const newLabels = [...labels];
    newLabels[index].x = e.target.x();
    newLabels[index].y = e.target.y();
    setLabels(newLabels);
  };


  return (
    <div className="diagram-labeling-container" style={{ position: 'relative' }}>
      <div className="controls">
        <input
          type="text"
          placeholder="Enter label text"
          value={newLabelText}
          onChange={(e) => setNewLabelText(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddLabel}>Add Label</button>
        <button onClick={handleAddArrow}>Add Arrow</button>
        <button onClick={handleDrawLine}>Draw Line</button>

        <select onChange={(e) => setDrawingMode(e.target.value)} value={drawingMode}>
          <option value="label">Label</option>
          <option value="arrow">Arrow</option>
          <option value="line">Line</option>
        </select>
      </div>

      <div className="diagram-area">
        <DiagramDisplay selectedDiagram={selectedDiagram} />
        <Stage width={600} height={400} className="labeling-stage" style={{ position: 'absolute', top: 0, left: 0 }}>
          <Layer>
            {labels.map((label, index) => (
              <Text
                key={index}
                x={label.x}
                y={label.y}
                text={label.text}
                fontSize={18}
                fill="black"
                draggable
                onDragEnd={(e) => handleLabelPositionChange(e, index)}
              />
            ))}

            {arrows.map((arrow, index) => (
              <Arrow
                key={index}
                points={arrow.points}
                pointerLength={10}
                pointerWidth={10}
                fill="black"
                stroke="black"
                draggable
              />
            ))}

            {lines.map((line, index) => (
              <Line
                key={index}
                points={line.points}
                stroke="black"
                strokeWidth={2}
                lineCap="round"
                lineJoin="round"
                draggable
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

LabelingTool.propTypes = {
  selectedDiagram: PropTypes.string.isRequired, 
};

export default LabelingTool;

