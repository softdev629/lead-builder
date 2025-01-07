import React from 'react';
import { useDrag } from 'react-dnd';
import { componentRegistry } from '../../../registry/componentRegistry';

const ComponentPanel: React.FC = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-4">
      <h2 className="text-sm font-medium text-gray-900 mb-4">Components</h2>
      <div className="grid grid-cols-4 gap-2">
        {Object.entries(componentRegistry).map(([type, config]) => (
          <DraggableComponent 
            key={type} 
            type={type} 
            icon={config.icon}
            label={config.label}
          />
        ))}
      </div>
    </div>
  );
};

interface DraggableComponentProps {
  type: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ 
  type, 
  icon: Icon,
  label 
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex flex-col items-center p-2 rounded cursor-move hover:bg-gray-50 
        ${isDragging ? 'opacity-50 bg-gray-100' : ''}`}
    >
      <Icon className="w-6 h-6 text-gray-600" />
      <span className="text-xs text-gray-600 mt-1">{label}</span>
    </div>
  );
};

export default ComponentPanel;
