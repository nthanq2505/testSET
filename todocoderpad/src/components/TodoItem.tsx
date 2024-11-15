import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.label({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  background: "white",
  fontWeight: "400",
  fontSize: 14,
  cursor: "pointer",
});

const Label = styled.span<{ checked: boolean }>(({ checked }) => ({
  textDecoration: checked ? "line-through" : "none",
  fontSize: 20,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Checkbox = styled.input({
  width: 16,
  height: 16,
  marginRight: 12,
});

const DeleteButton = styled.button({
  background: "transparent",
  color: "transparent",
  border: "none",
  borderRadius: 4,
  padding: "8px 12px",
  cursor: "pointer",
  transition: "color 0.3s",
  '&:hover': {
    color: "white",
    background: "red",
  },
});

export interface TodoItemProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean, id: string) => void;
  onDelete?: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  checked = false,
  onChange,
  onDelete,
}) => {
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked, id)}
      />
      <Label checked={checked}>{label}</Label>
      <DeleteButton onClick={() => onDelete(id)}>X</DeleteButton>
    </Wrapper>
  );
};
