import React, { type ReactElement } from 'react';
import { useDrop } from 'react-dnd';
import { componentRegistry } from '../../../registry/componentRegistry';

interface CanvasProps {
  template: any;
  onTemplateChange: (template: any) => void;
  onElementSelect: (elementId: string | null) => void;
}

const Canvas: React.FC<CanvasProps> = ({ 
  template, 
  onTemplateChange, 
  onElementSelect 
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item: { type: string }, monitor) => {
      const componentConfig = componentRegistry[item.type];
      if (componentConfig) {
        addComponent(item.type);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponent = (type: string) => {
    const newComponent = {
      id: `${type}-${Date.now()}`,
      type,
      settings: { ...componentRegistry[type].defaultProps }
    };

    onTemplateChange({
      ...template,
      content: {
        ...template.content,
        sections: [
          ...template.content.sections,
          newComponent
        ]
      }
    });
  };

  return (
    <div 
      ref={drop}
      className={`min-h-full p-8 bg-white rounded-lg shadow-sm
        ${isOver ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}
    >
      {template.content.sections.map((section: any) => {
        const Component = componentRegistry[section.type]?.component;
        return Component ? (
          <div 
            key={section.id}
            onClick={() => onElementSelect(section.id)}
            className="relative p-2 hover:outline-dashed hover:outline-2 
              hover:outline-blue-200 rounded"
          >
            <Component {...section.settings} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Canvas;
