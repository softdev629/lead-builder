import { Button } from '../../Button';
import { Image } from '../../Image';
import { Text } from '../../Text';

export interface ComponentConfig {
  type: string;
  component: React.ComponentType<any>;
  defaultProps: Record<string, any>;
  icon: string;
  label: string;
}

export const componentRegistry: Record<string, ComponentConfig> = {
  button: {
    type: 'button',
    component: Button,
    defaultProps: {
      text: 'Click me',
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '10px 20px',
    },
    icon: 'button-icon',
    label: 'Button'
  },
  image: {
    type: 'image',
    component: Image,
    defaultProps: {
      src: '',
      alt: '',
      width: 200,
      height: 200,
    },
    icon: 'image-icon',
    label: 'Image'
  },
  text: {
    type: 'text',
    component: Text,
    defaultProps: {
      content: 'Add your text here',
      fontSize: '16px',
      color: '#000000',
    },
    icon: 'text-icon',
    label: 'Text'
  },
};
