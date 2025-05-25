"use client";

import { TodoProvider } from "@/lib/TodoContext";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoItem } from "@/components/todos/TodoItem";
import { useTodo } from "@/lib/TodoContext";

const TodoList = () => {
  const { state } = useTodo();

  return (
    <div className="space-y-4">
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {state.todos.length === 0 && (
        <p className="text-center text-gray-500">タスクがありません</p>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <TodoProvider>
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            TODOアプリ
          </h1>
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </TodoProvider>
  );
}
