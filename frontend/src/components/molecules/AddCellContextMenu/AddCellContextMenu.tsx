import React  from 'react';

import { OpenContextMenuButton } from '@atoms/index';
import { ContextMenu } from './ContextMenu';
import AddIcon from '@public/AddIcon.svg'

export const AddCellContextMenu: React.FC = () => {
    return (
       <OpenContextMenuButton contextMenu={<ContextMenu />} icon={<AddIcon />} />
    );
}
