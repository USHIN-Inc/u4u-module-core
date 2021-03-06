/* eslint-disable */
/*
  Copyright (C) 2019 by USHIN, Inc.

  This file is part of U4U.

  U4U is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  U4U is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with U4U.  If not, see <https://www.gnu.org/licenses/>.
*/
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};
const DeleteIconButton: React.FC<Props> = ({ handleClick }) => (
  <Container role="button" onClick={handleClick}>
    <Icon icon={faTimes} />
  </Container>
);

DeleteIconButton.defaultProps = {
  handleClick: () => {},
};

// DeleteIconButton.propTypes = {
//   handleClick: PropTypes.func,
// };

const Container = styled.div`
  display: inline;
`;

export default DeleteIconButton;
