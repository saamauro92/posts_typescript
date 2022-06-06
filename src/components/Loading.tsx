interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props): JSX.Element => {
  return (
    <>
      {loading ? <h2 className="text-white text-center">LOADING...</h2> : null}
    </>
  );
};

export default Loading;
