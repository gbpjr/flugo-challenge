import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Frame from '../../components/Frame';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import { Container, ChartsContainer } from './styles.tsx';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Obtém as informações do usuário do localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    // Verifique se o usuário está logado
    if (!user.id) {
      // Se não estiver logado, redirecione para a página de login
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Frame>
      <Container>
        <Typography variant="h1" component="h1">
          Olá, {user.email || 'Usuário'}.
        </Typography>
        <ChartsContainer>
          <Card>{/* Seu conteúdo do card */}</Card>
          <Card>{/* Seu conteúdo do card */}</Card>
          <Card>{/* Seu conteúdo do card */}</Card>
        </ChartsContainer>
        <ChartsContainer>
          <Chart title="Balanço financeiro anual" keys={['lucro_liquido', 'receita', 'despesa']} />
        </ChartsContainer>
      </Container>
    </Frame>
  );
};

export default Home