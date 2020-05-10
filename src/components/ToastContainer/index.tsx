import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';

import { ToastMessage } from '../../context/ToastContext';

interface ToastContainerProps {
  type?: 'success' | 'error' | 'info';
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messagesWithTransition.map(({ item: message, key, props }) => (
        <Toast style={props} key={key} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
