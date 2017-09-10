import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;

  &:hover {
    padding: 1em;
    cursor: pointer;
    background: #e1e1e1;
    text-decoration: none;
    color: #666;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
  }
`;

const Icon = styled.div`
  width: 100%;
  height: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => props.type === 'dir' ?
    'url(https://yastatic.net/disk/_/FVletVvTzueYSFD_PJRzYa1p39U.svg)' :
    `url(${props.preview})`}
`

const Title = styled.span`
  align-self: center;
`;

const Item = ({ item }) => (
  <Wrapper onClick={item.onGetResources}>
    <Icon type={item.type} preview={item.preview} />
    <Title>
      {item.name}
    </Title>
  </Wrapper>
);

Item.propTypes = {
  created: PropTypes.string,
  modified: PropTypes.string,
  name: PropTypes.string,
  preview: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string,
  onItemSelect: PropTypes.func,
}

export default Item;
