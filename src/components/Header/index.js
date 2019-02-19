import React, { Component } from 'react';
import { NamespacesConsumer } from 'react-i18next';

export default class Header extends Component {
  state = { title: 'Some title'}
  render() {
    return (
      <h1>
        <NamespacesConsumer>
          { t => t('This is header with key') }
        </NamespacesConsumer>
      </h1>


    )
  }
}