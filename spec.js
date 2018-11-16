import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import format from './';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const Dumb = (props) => <div/>;
const reformat = (mapper) => format(mapper)(Dumb);

describe('React format props', () => {

    describe('When mapper not passed', () => {
        it('Should pass down original props object', () => {
            const Comp = reformat();
            const BaseProps = {
                a: 1,
                b: 2,
                c: 3
            };

            expect(mount(<Comp {...BaseProps}/>).find('Dumb').props()).toEqual(BaseProps)
        })
    });

    describe('When mapper passed', () => {
        it('Should pass down formatted props based on mapper function', () => {
            const Comp = reformat((props) => {
                return {
                    d: 3,
                    ...props
                };
            });

            const BaseProps = {
                a: 1,
                b: 2,
                c: 3
            };

            expect(mount(<Comp {...BaseProps}/>).find('Dumb').props()).toEqual({
                ...BaseProps, d: 3
            });
        })
    });
});