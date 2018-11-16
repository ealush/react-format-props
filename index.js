import React from 'react';

export default (mapper = (props) => props) => (Comp) => (props) => <Comp {...mapper(props)}/>;
