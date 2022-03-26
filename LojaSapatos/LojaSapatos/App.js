import 'react-native-gesture-handler';

import { StatusBar } from 'react-status-bar';
import React from 'react';
import { AppLoading } from 'react';

import Routes from './src/router';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#706f6f" translucent={true} />
      <Routes/>
    </>
  );
}