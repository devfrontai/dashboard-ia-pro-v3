import { useState } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callGrok = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    setTimeout(() => {
      setResponse('Resposta da IA para: ' + prompt);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Dashboard IA Pro</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite sua pergunta..."
        style={{ width: '100%', height: '120px', margin: '1rem 0', padding: '1rem', background: '#111', color: 'white', border: '1px solid #333' }}
      />
      <button onClick={callGrok} disabled={loading} style={{ padding: '1rem 2rem', background: '#0f0', color: '#000', border: 'none', fontWeight: 'bold' }}>
        {loading ? 'Carregando...' : 'Enviar para IA'}
      </button>
      {response && <p style={{ marginTop: '2rem', padding: '1rem', background: '#111', border: '1px solid #333' }}>{response}</p>}
    </div>
  );
}
