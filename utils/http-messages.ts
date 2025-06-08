export const httpErrorMessages: Record<number, string> = {
    400: 'Requisição inválida.',
    401: 'Você precisa inserir uma API_KEY válida',
    403: 'Você não tem permissão para acessar este recurso.',
    404: 'Conteúdo não encontrado.',
    408: 'Tempo de resposta esgotado.',
    429: 'Muitas requisições. Tente novamente mais tarde.',
    500: 'Erro de servidor. Tente novamente mais tarde.',
    502: 'Bad Gateway.',
    503: 'Serviço temporariamente indisponível.',
    504: 'Servidor demorou para responder.',
};

export const networkMessages = {
    noResponse: 'Sem conexão com o servidor.',
    timeout: 'Timeout. Tente novamente mais tarde',
    default: 'Algo deu errado. Tente novamente mais tarde',
};
