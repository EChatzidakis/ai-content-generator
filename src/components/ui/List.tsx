import React from 'react';
import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListProps } from '@mui/material/List';

interface ListComponentProps extends ListProps {
  listItems: ListItemProps[];
  onItemClick: (item: string) => void;
}

export interface ListItemProps {
  value: string;
  label: string;
}

const ListComponent: React.FC<ListComponentProps> = ({
  listItems,
  onItemClick,
  ...props
}) => {
  const renderListItems = () => {
    return listItems?.map(({ value, label }) => (
      <ListItem key={value} disablePadding>
        <ListItemButton onClick={() => onItemClick(value)}>
          {label}
        </ListItemButton>
      </ListItem>
    ));
  };

  return <MuiList {...props}>{renderListItems()}</MuiList>;
};

export const List = ListComponent;
