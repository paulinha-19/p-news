export const httpErrorMessages: Record<number, string> = {
    400: 'Requisição inválida.',
    401: 'Você precisa inserir uma API_KEY válida',
    403: 'Você atingiu sua cota diária, o próximo reset será às 00:00 UTC',
    404: 'Conteúdo não encontrado.',
    408: 'Tempo de resposta esgotado.',
    429: 'Você fez mais pedidos por segundo do que o permitido',
    500: 'Tivemos um problema com o nosso servidor. Tente novamente mais tarde',
    502: 'Bad Gateway.',
    503: 'Estamos temporariamente offline para manutenção. Por favor, tente novamente mais tarde.',
    504: 'Servidor demorou para responder.',
};

export const networkMessages = {
    noResponse: 'Sem conexão com o servidor.',
    timeout: 'Timeout. Tente novamente mais tarde',
    default: 'Algo deu errado. Tente novamente mais tarde',
};
