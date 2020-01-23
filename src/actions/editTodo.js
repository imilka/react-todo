export const editTodo = (id, description) => {
  return {
    type: 'EDIT_TODO',
    id,
    description
  };
};
