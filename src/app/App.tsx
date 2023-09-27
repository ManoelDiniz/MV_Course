import { UsuarioLogadoProvider } from './shared/contexts';
import Router from '../app/routes/index';


export const App = () => {
  return (
    <UsuarioLogadoProvider nomeDoUsuario='Manoel'>
      <Router />
    </UsuarioLogadoProvider>
    
  );
}
