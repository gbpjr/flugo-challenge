import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Frame from '../../components/Frame';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import { Container, ChartsContainer } from './styles.tsx';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    if (!user.id) {
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
          <Card
            title='Receita'
            value={250000}
            color='rgba(60, 179, 113)'
            percentage={8.70}
          />
          <Card
            title='Despesas'
            value={120000}
            color='rgb(255, 99, 132)'
            percentage={14.29}
          />
          <Card
            title='Lucro Líquido'
            value={130000}
            color='rgb(54, 162, 235)'
            percentage={4}
          />
        </ChartsContainer>
        <ChartsContainer>
          <Chart title="Balanço financeiro anual" keys={['lucro_liquido', 'receita', 'despesa']} />
        </ChartsContainer>
      </Container>
    </Frame>
  );
};

export default Home