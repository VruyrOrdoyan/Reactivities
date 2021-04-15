import React from 'react';
import { Dock } from './demo/demo';

interface Props {
    dock: Dock
};

const DockPresentation = ({dock}: Props) => {
    return (<div>
        <span>{dock.name}</span>
        <button onClick={() => dock.makeSound(dock.name + ' gaga')}>Make Sound</button>
    </div>);
};

export default DockPresentation;