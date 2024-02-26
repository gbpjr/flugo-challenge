// Importe as funções necessárias dos SDKs que você precisa
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Adicione SDKs para os produtos do Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Sua configuração do Firebase para a web
const firebaseConfig = {
  apiKey: "AIzaSyCywlbr5qXq-CaqqfRZAQhA_OxUg00QRs4",
  authDomain: "flugo-challenge.firebaseapp.com",
  projectId: "flugo-challenge",
  storageBucket: "flugo-challenge.appspot.com",
  messagingSenderId: "69381750000",
  appId: "1:69381750000:web:aff1e6777b15818d341635"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize a Autenticação do Firebase e obtenha uma referência ao serviço
export const auth = getAuth(app);
export { signInWithEmailAndPassword }; 