import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

jest.mock("@/lib/tarefas", () => ({
  getTarefas: async () => [
    { id: 1, titulo: "Teste" },
  ],
  tarefasIniciais: [],
}));

jest.mock("@/components/NovaTarefa", () => ({
  __esModule: true,
  default: () => <div>NovaTarefa</div>,
}));

test("renderiza tarefas", async () => {
  const PageComponent = await Page();
  render(PageComponent);
  expect(screen.getByText("Teste")).toBeInTheDocument();
});

test("renderiza o título da página", async () => {
  const PageComponent = await Page();
  render(PageComponent);
  expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
});
