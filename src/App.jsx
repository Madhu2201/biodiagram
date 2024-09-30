
import { useState } from 'react';
import Homepage from './Components/Homepage';
import DiagramDisplay from './Components/DiagramDisplay';
import ExportFeature from './Components/ExportFeature';
import LabelingTool from './Components/Labelingtoll';

function App() {
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">BioDiagram</h1>
      <Homepage onDiagramSelect={setSelectedDiagram} />

      {selectedDiagram && (
        <div id="diagram">
          <DiagramDisplay selectedDiagram={selectedDiagram} />
          <LabelingTool selectedDiagram={selectedDiagram} />
        </div>
      )}

      <ExportFeature />
    </div>
  );
}

export default App;
