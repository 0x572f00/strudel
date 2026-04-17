import { forwardRef } from 'react';
import styles from '@src/repl/components/CodeBlock.module.css';

export const CodeBlock = forwardRef(function CodeBlock({ className = '', ...rest }, ref) {
  const mergedClassName = [styles.root, className].filter(Boolean).join(' ');

  return <section ref={ref} className={mergedClassName} {...rest} />;
});
