
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import '../Components/Export.css';

function ExportFeature() {
  const exportAsImage = () => {
    const diagramElement = document.querySelector('#diagram');

    if (!diagramElement) {
      alert('No diagram to export!');
      return;
    }

    console.log('Diagram element:', diagramElement);

    const img = diagramElement.querySelector('img');
    if (img && !img.complete) {
      img.onload = () => {
        captureAndExportImage(diagramElement);
      };
    } else {
      captureAndExportImage(diagramElement);
    }
  };

  const captureAndExportImage = (diagramElement) => {
    html2canvas(diagramElement, { useCORS: true }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'diagram.png';
      link.click();
    }).catch(error => {
      console.error('Error capturing image:', error);
    });
  };

  const exportAsPDF = () => {
    const diagramElement = document.querySelector('#diagram');

    if (!diagramElement) {
      alert('No diagram to export!');
      return;
    }

    console.log('Diagram element:', diagramElement);

    const img = diagramElement.querySelector('img');
    if (img && !img.complete) {
      img.onload = () => {
        captureAndExportPDF(diagramElement);
      };
    } else {
      captureAndExportPDF(diagramElement);
    }
  };

  const captureAndExportPDF = (diagramElement) => {
    html2canvas(diagramElement, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('diagram.pdf');
    }).catch(error => {
      console.error('Error capturing PDF:', error);
    });
  };

  return (
    <div>
      <button onClick={exportAsImage}>Export as Image</button>
      <button onClick={exportAsPDF}>Export as PDF</button>
    </div>
  );
}

export default ExportFeature;
