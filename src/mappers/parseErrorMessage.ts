const parseErrorMessage = (
  message: string,
  entity: 'Personagem' | 'Episódio',
): string => {
  if (message.includes('404')) {
    return `${entity} não encontrado com os dados fornecidos!`;
  }
  if (message.includes('500')) {
    return 'Não foi possível conectar com o servidor.';
  }
  return message;
};

export default parseErrorMessage;
