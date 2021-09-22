import ZeshItemDetails from '../../components/zesh/ZeshItemDetails';

function ZeshDetails() {
  return <ZeshItemDetails title="Tutto Tasse" />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          zeshId: 'z1',
        },
      },
      {
        params: {
          zeshId: 'z2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const zeshId = context.params.zeshId;

  return {
    props: {
      zeshData: {
        id: zeshId,
        title: 'Tette Tosse',
      },
    },
  };
}

export default ZeshDetails;
