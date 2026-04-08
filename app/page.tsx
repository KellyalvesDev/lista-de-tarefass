import { getTarefas } from "@/lib/tarefas";
import NovaTarefa from "@/components/NovaTarefa";

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <NovaTarefa />
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </main>
  );
}
