import type { ReactNode } from 'react';
import { WA_URL } from '../data';
import { WAIcon } from './Icons';

interface WhatsAppButtonProps {
  children?: ReactNode;
  message?: string;
  large?: boolean;
  sm?: boolean;
}

export function WhatsAppButton({ children, message, large, sm }: WhatsAppButtonProps) {
  const cls = ['btn', 'btn-whatsapp', large ? '' : sm ? 'btn-sm' : ''].filter(Boolean).join(' ');
  return (
    <a href={WA_URL(message)} target="_blank" rel="noopener" className={cls}>
      <WAIcon/>
      {children || 'Order on WhatsApp'}
    </a>
  );
}
