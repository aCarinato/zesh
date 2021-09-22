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

function HomePage(props) {
  return <ZeshList zeshes={props.zeshes} />;
}

export async function getStaticProps() {
  return {
    props: {
      zeshes: DUMMY_ZESHES,
    },
    revalidate: 10,
  };
}

export default HomePage;
