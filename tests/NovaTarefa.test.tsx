import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("renderiza o input e o botão", () => {
  render(<NovaTarefa />);
  expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Adicionar" })).toBeInTheDocument();
});

test("não adiciona tarefa com input vazio", () => {
  render(<NovaTarefa />);
  const button = screen.getByRole("button", { name: "Adicionar" });
  fireEvent.click(button);
  const itens = screen.queryAllByRole("listitem");
  expect(itens).toHaveLength(0);
});

test("adiciona tarefa ao submeter o formulário", () => {
  render(<NovaTarefa />);
  const input = screen.getByPlaceholderText("Digite uma tarefa");
  fireEvent.change(input, { target: { value: "Minha tarefa" } });
  fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));
  expect(screen.getByText("Minha tarefa")).toBeInTheDocument();
});

test("limpa o input após adicionar", () => {
  render(<NovaTarefa />);
  const input = screen.getByPlaceholderText("Digite uma tarefa") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Tarefa X" } });
  fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));
  expect(input.value).toBe("");
});
