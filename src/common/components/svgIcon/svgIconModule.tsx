import React from 'react';
import cx from 'classnames';
import { capitalizeFirstLetter } from '../../../common/utils';
import styles from './svgIcon.module.css';
import { hot } from 'react-hot-loader';
import {SvgIconProps} from './svgIcon'
 function SvgIcon({
    children,
    className = '',
    color = 'inherit',
    fontSize = 'default',
    htmlColor,
    viewBox = '0 0 24 24',
    ...other
  }: SvgIconProps) {
    return (
      <svg
        className={cx(
          styles.root,
          {
            [styles[`color${capitalizeFirstLetter(color)}`]]: color !== 'inherit',
            [styles[`fontSize${capitalizeFirstLetter(fontSize)}`]]: fontSize !== 'default',
          },
          className,
        )}
        focusable="false"
        aria-hidden="false"
        role="presentation"
        color={htmlColor}
        viewBox={viewBox}
        {...other}
      >
        {children}
      </svg>
    );
  }
  export default hot(module)(SvgIcon);