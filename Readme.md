# React Format Props

A tiny props formatter for React. How tiny? Here's the whole source:

```js
import React from 'react';

export default (mapper = (props) => props) => (Comp) => (props) => <Comp {...mapper(props)}/>;
```

## Installation
```
npm i react-format-props
```

## Why?
I needed it.

## What is it?
It is a tiny connector for your React components, it allows you to wrap your components with this formatter, to which you can pass a *mapper function. Use it to do all the manipulations on the props you would normally do inside your component. This laeves your components side effects free and much easier to read.

*mapper is basically `mapPropsToProps` (Yeah, that's not a mistake. You are mapping your props to new ones).

## Why use it?
Cleaner components.

## Any examples?
Let's say we want to use moment.js to format a date passed down via props.

```js
import React from 'react';
import format from 'react-format-props';
import moment from 'moment';

const HumanReadableTime = ({ dateTime }) => (<time>{dateTime}</time>);
// dateTime prop will be the formatted datetime

export default format((props) => ({
    ...props,
    dateTime: moment(props.dateTime).format( "YYYY-MM-DD HH:mm:ss")
}))(HumanReadableTime);
```

This is basically Redux's `connect`, just without the provider.

### Disclaimer
I am probably not the first person to use it this way. This snippet can probably be found somewhere on the internet. I couldn't find it within 1 minute on Gooogle so I put it here for others to find it more easily.