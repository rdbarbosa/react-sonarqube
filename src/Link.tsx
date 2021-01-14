import React, { useState } from 'react'

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default function Link(props: { children: any; page: any; }) {
    const { children, page } = props;
    const initialState = {
        class: STATUS.NORMAL,
    }
    const [state, setState] = useState(initialState)

    const onMouseEnter = () => {
        setState({class: STATUS.HOVERED});
    };
    
    const onMouseLeave = () => {
        setState({class: STATUS.NORMAL});
    }

    return (
        <div>
            <a
                className={state.class}
                href={ page || '#'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
        {children}
      </a>
        </div>
    )
}
