export const createTodo = description => {
  return {
    type: 'CREATE_TODO',
    description
  };
};
