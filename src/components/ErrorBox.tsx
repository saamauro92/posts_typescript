interface Props {
  error: string;
}

const ErrorBox = ({ error }: Props): JSX.Element => {
  return (
    <>
      {error && <h2 className="bg-red-500 text-white text-center">{error}</h2>}
    </>
  );
};

export default ErrorBox;
