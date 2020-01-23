export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      const nextTodoId = state.length === 0 ? 0 : state[state.length - 1].id + 1;

      return [
        ...state,
        {
          id: nextTodoId,
          description: action.description,
          completed: false
        }
      ];
    case 'TOGGLE_COMPLETE_TODO':
      return state.map(todo => {
        return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      });
    case 'DELETE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id
      });
    case 'EDIT_TODO':
      return state.map(todo => {
        return todo.id === action.id ? { ...todo, description: action.description } : todo
      });
    default:
      return state
  }
}
