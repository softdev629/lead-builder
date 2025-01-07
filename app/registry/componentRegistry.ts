import { Button } from '../components/Button';
import { Image } from '../components/Image';
import { Text } from '../components/Text';
import { CursorArrowRaysIcon, PhotoIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export interface ComponentConfig {
  type: string;
  component: React.ComponentType<any>;
  defaultProps: Record<string, any>;
  icon: React.ComponentType<any>;
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
    icon: CursorArrowRaysIcon,
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
    icon: PhotoIcon,
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
    icon: DocumentTextIcon,
    label: 'Text'
  },
};
