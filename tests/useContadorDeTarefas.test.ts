import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

test("deve contar tarefas corretamente", () => {
  const { result } = renderHook(() =>
    useContadorDeTarefas([
      { id: 1, titulo: "A" },
      { id: 2, titulo: "B" },
    ])
  );

  expect(result.current).toBe(2);
});

test("deve retornar 0 quando não há tarefas", () => {
  const { result } = renderHook(() => useContadorDeTarefas([]));
  expect(result.current).toBe(0);
});
