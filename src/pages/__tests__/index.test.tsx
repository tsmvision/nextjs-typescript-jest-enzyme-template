import React from 'react';
import {mount, shallow} from 'enzyme';
import Index from '../index';

describe('index page', () => {
    it('should have App component', () => {
        const wrapper = mount(<Index />);

        expect(wrapper.find('HomePage')).toHaveLength(1);
    });

    it('should have valid strings', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('h1').text()).toContain("W");
    });
});