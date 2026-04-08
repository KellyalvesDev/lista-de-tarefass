export type Tarefa = {
  id: number;
  titulo: string;
};

export const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js" },
  { id: 2, titulo: "Fazer exercícios" },
];

export async function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasIniciais);
}
