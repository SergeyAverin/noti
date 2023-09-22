import React  from 'react';

import { ContextMenu } from './ContextMenu';
import { OpenContextMenuButton } from '@atoms/index';

import EditIcon from '@public/EditIcon.svg'

export const CellPropertyContextMenu: React.FC = () => {
    return (
       <OpenContextMenuButton contextMenu={<ContextMenu />} icon={<EditIcon />} />
    );
}
