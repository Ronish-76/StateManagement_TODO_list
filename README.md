# State Management ToDo List Application

A modern React-based ToDo List application demonstrating fundamental state management concepts using React Hooks.

## Overview

This project showcases a practical implementation of React's `useState` Hook for managing component state. It's a lightweight course management system with a primary focus on the ToDo List component, perfect for learning state management patterns in React.

## Features

### ToDo List Component

- ✅ **Add Todos**: Create new todo items using the input field
- ✅ **Mark as Complete**: Toggle completion status with a checkbox
- ✅ **Delete Todos**: Remove todos with the delete button
- ✅ **Keyboard Support**: Press Enter to add a new todo
- ✅ **Visual Feedback**: Completed todos show with strikethrough text

### Counter App (Bonus)

- Simple counter with increment and decrement functionality
- Demonstrates basic state management with `useState`

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Inline CSS
- **State Management**: React Hooks (`useState`)

## State Management Explained

This project uses **React's `useState` Hook** for all state management - a simple yet powerful approach for small to medium applications.

### Key Concepts Implemented:

1. **Local Component State**

   ```jsx
   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
   ```

   - State is stored locally within each component
   - Perfect for isolated, independent components

2. **Immutable State Updates**

   ```jsx
   // Adding a todo
   setTodos([...todos, { id: Date.now(), text: input, completed: false }]);

   // Toggling completion
   setTodos(
     todos.map((todo) =>
       todo.id === id ? { ...todo, completed: !todo.completed } : todo,
     ),
   );
   ```

   - Uses spread operator to create new arrays/objects
   - Follows React's immutability principle

3. **Event-Driven Updates**
   - Input changes via `onChange`
   - Button clicks via `onClick`
   - Keyboard events via `onKeyPress`

## Project Structure

```
CourseManagementSystem/
├── client/
│   ├── src/
│   │   ├── App.jsx              # Main app component
│   │   ├── ToDo.jsx             # Todo list component (primary feature)
│   │   ├── CounterApp.jsx       # Counter demo component
│   │   ├── infocard.jsx         # Info card component
│   │   ├── Components/
│   │   │   └── NavbarComponents.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ronish-76/StateManagement_TODO_list.git
   cd CourseManagementSystem/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or another port if 5173 is busy)

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage

### Adding a Todo

1. Type your todo text in the input field
2. Click the "Add" button or press Enter
3. The todo appears in the list below

### Completing a Todo

- Click the checkbox next to any todo to mark it as complete
- Completed todos show with strikethrough text and grayed out color

### Deleting a Todo

- Click the "Delete" button on any todo to remove it permanently

## Code Highlights

### Add Todo Function

```jsx
const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }
};
```

### Toggle Completion

```jsx
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  );
};
```

### Delete Todo

```jsx
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

## State Management Patterns Used

| Pattern                    | Usage                                              |
| -------------------------- | -------------------------------------------------- |
| **Local State**            | Each component manages its own state independently |
| **Immutable Updates**      | Arrays and objects are never mutated directly      |
| **Single Source of Truth** | State is the single source of truth for the UI     |
| **Controlled Components**  | Input field value is controlled by state           |
| **Event Handlers**         | State updates triggered by user interactions       |

## When to Level Up

This project demonstrates basic state management. As your application grows, consider:

- **Context API**: For sharing state across multiple components
- **Redux/Zustand**: For complex global state management
- **Local Storage**: For persisting todos across sessions
- **Backend API**: For server-side todo persistence

## Learning Outcomes

By studying this project, you'll understand:

- ✅ How to use React Hooks (`useState`)
- ✅ Managing multiple pieces of state
- ✅ Updating state immutably
- ✅ Event handling in React
- ✅ Conditional rendering
- ✅ List rendering with `.map()`
- ✅ Component lifecycle with state

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern browsers with ES6+ support

## License

This project is part of a college course assignment.

## Author

Created by: [Your Name]
Repository: [https://github.com/Ronish-76/StateManagement_TODO_list.git](https://github.com/Ronish-76/StateManagement_TODO_list.git)

---

**Happy Coding!** 🚀
