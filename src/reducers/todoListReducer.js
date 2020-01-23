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
    default:
      return state
  }
}
