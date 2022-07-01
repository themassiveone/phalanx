interface ResourceProps {
  test: string;
}

const Resource: React.FC<ResourceProps> = ({ test }) => {
  return <div>{test}</div>;
};

export default Resource;
