import React, { useState } from 'react';
import ComponentPanel from './ComponentPanel/ComponentPanel';
import Canvas from './Canvas/Canvas';
import PropertyPanel from './PropertyPanel/PropertyPanel';

interface BuilderProps {
  // Add props as needed
}

const Builder: React.FC<BuilderProps> = () => {
  const [template, setTemplate] = useState({
    content: {
      sections: []
    }
  });
  
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <ComponentPanel />
      <div className="flex-1 p-4">
        <Canvas 
          template={template} 
          onTemplateChange={setTemplate}
          onElementSelect={setSelectedElement}
        />
      </div>
      <PropertyPanel 
        selectedElement={selectedElement}
        template={template}
        onTemplateChange={setTemplate}
      />
    </div>
  );
};

export default Builder;
