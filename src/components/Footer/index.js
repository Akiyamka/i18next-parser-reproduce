import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

export default function Footer() {
  return <footer>
    <NamespacesConsumer>
    { t => t('This is footer without key') }
    </NamespacesConsumer>
  </footer>
}