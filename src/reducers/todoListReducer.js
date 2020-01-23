const initialState = [
  {
    id: 1,
    description: "Todo item 1",
    completed: false
  },
  {
    id: 2,
    description: "Todo item 2",
    completed: true
  },
  {
    id: 3,
    description: "Todo item 3",
    completed: false
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      const nextTodoId = state[state.length - 1].id + 1;

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
