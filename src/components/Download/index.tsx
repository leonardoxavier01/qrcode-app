import React from 'react';

import { StyledButtonDownload } from './styles';

interface IProps {
  dataString: string | undefined;
  name: string;
}

const Download: React.FC<IProps> = ({ dataString, name }) => {
  return (
    <StyledButtonDownload href={dataString} download={name}>
      Download
    </StyledButtonDownload>
  );
};

export default Download;
