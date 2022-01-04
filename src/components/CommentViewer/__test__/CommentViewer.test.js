import React from "react";
import reactDom from "react-dom";
import CommentViewer from "../CommentViewer";

import {render, cleanup, screen} from '@testing-library/react';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('match snapshot', () => {
    const tree = renderer.create(<CommentViewer/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('comment header', () => {
    render(<CommentViewer/>);
    screen.getByText("Comments History");
})

