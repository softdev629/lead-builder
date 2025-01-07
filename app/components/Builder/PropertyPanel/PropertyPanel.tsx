import React from 'react';

interface PropertyPanelProps {
  selectedElement: string | null;
  template: any;
  onTemplateChange: (template: any) => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({ 
  selectedElement, 
  template, 
  onTemplateChange 
}) => {
  return (
    <div className="w-72 bg-white border-l border-gray-200 p-4">
      {selectedElement ? (
        <div className="text-sm text-gray-700">
          Properties for element: {selectedElement}
        </div>
      ) : (
        <div className="text-sm text-gray-500">
          No element selected
        </div>
      )}
    </div>
  );
};

export default PropertyPanel; 