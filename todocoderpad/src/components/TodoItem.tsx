import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.label({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  background: "white",
  fontWeight: "400",
  fontSize: 14,
  cursor: "pointer",
  // TODO: Add hover effect
  "&:hover": {
    "& button": {
      display: "block",
    },
  },
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
  marginLeft: "auto",
  background: "red",
  color: "white",
  border: "none",
  padding: 4,
  cursor: "pointer",
  display: "none",
});

export interface TodoItemProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (id: string, checked: boolean) => void;
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
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <Label checked={checked}>{label}</Label>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </Wrapper>
  );
};
