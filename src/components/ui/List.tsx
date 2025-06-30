'use client';
import React from 'react';
import styled from 'styled-components';
import MuiList, { ListProps as MuiListProps } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';

export interface ListItemProps {
  value: string;
  label: string;
}

export interface ListComponentProps extends MuiListProps {
  listItems: ListItemProps[];
  onItemClick: (item: string) => void;
  selected?: string;
}

const StyledList = styled(MuiList)`
  padding: 0; /* reset default 8px */
  background-color: ${({ theme }) => theme.colors.surface};
`;

const ListItemButton = styled(MuiListItemButton)<{ $active?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  ${({ $active, theme }) =>
    $active &&
    `background-color: ${theme.colors.primary}14; color: ${theme.colors.primary}; font-weight: 600;`}
`;

const ListComponent: React.FC<ListComponentProps> = ({
  listItems,
  onItemClick,
  selected,
  ...props
}) => {
  return (
    <StyledList disablePadding {...props}>
      {listItems.map(({ value, label }) => (
        <ListItem key={value} disablePadding>
          <ListItemButton
            $active={selected === value}
            onClick={() => onItemClick(value)}
          >
            {label}
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

export const List = ListComponent;
