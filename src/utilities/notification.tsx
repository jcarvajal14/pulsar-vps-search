import React from 'react';
import { notification as antdNotification } from 'antd';
import 'antd/dist/antd.css';
import {
  CloseCircleFilled,
  InfoCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { Color } from '../constants/color';

antdNotification.config({
  placement: 'topRight',
  duration: 2,
  top: 64,
});

export const Notification = {
  error: ({
    message,
    description,
  }: {
    message: string;
    description: string;
  }) => {
    antdNotification.error({
      message: <div style={{ color: 'white' }}>{message}</div>,
      description: <div style={{ color: 'white' }}>{description}</div>,
      className: 'notification',
      style: {
        width: 600,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: 'black',
        // border: '1px solid #ffa39e',
        margin: 0,
        top: 48,
        boxShadow: 'unset',
      },
      icon: <CloseCircleFilled style={{ color: '#f5222e' }} />,
    });
  },
  warning: ({
    message,
    description,
  }: {
    message: string;
    description: string;
  }) => {
    antdNotification.warning({
      message: <div style={{ color: 'white' }}>{message}</div>,
      description: <div style={{ color: 'white' }}>{description}</div>,
      className: 'notification',
      style: {
        width: 600,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: 'black',
        // border: '1px solid #ffe58f',
        margin: 0,
        top: 48,
        boxShadow: 'unset',
      },
      icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
    });
  },

  success: ({
    message,
    description,
  }: {
    message: string;
    description: string;
  }) => {
    antdNotification.success({
      message: <div style={{ color: 'white' }}>{message}</div>,
      description: <div style={{ color: 'white' }}>{description}</div>,
      className: 'notification',
      style: {
        width: 600,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: 'black',
        margin: 0,
        boxShadow: 'unset',
      },
      icon: <CheckCircleFilled style={{ color: Color.$brand_600 }} />,
    });
  },
};
