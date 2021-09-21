import React from 'react';
import ZeshList from '../components/zesh/ZeshList';

const DUMMY_ZESHES = [
  {
    id: 'z1',
    title: 'Tutto Tasse',
  },
  {
    id: 'z2',
    title: 'Itinerie',
  },
];

export default function HomePage() {
  return <ZeshList zeshes={DUMMY_ZESHES} />;
}
