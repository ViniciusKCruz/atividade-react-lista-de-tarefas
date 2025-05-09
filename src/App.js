import { useState } from 'react';
import './App.css';

function App() {
  
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');

    const adicionarTarefa = () => {
      const novaTarefa = tarefa.trim().toLowerCase(); // Normaliza a tarefa
      if (novaTarefa === '') return;
    
      const tarefaJaExiste = tarefas.some(t => t.toLowerCase().trim() === novaTarefa);
      if (tarefaJaExiste) {
        alert('Esta tarefa já foi adicionada!');
        return;
      }
    
      setTarefas([...tarefas, tarefa.trim()]);
      setTarefa('');
    }
    
    //Remover tarefas
    const removerTarefa = (index) => {
      const novasTarefas = tarefas.filter((_, i) => i !== index);
      setTarefas(novasTarefas);
    }

    return(
    <div className="Lista-de-tarefas">
      <img src="/images/logo-to-do-list.png" alt="Logo" className="logo" />
      <h2>Lista de Tarefas</h2>
      <p>Organize as suas tarefas aqui:</p>
      <hr></hr>
      <input
        type= "text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)} //Atualiza estado do campo
        placeholder='Adicione uma tarefa'
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      {/* Lista de tarefas */}
      <ul>
        {tarefas.map((tarefa, index) =>
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        )}
      </ul>

    </div>
    );
}

export default App;
