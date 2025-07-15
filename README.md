# Sistema de Gerenciamento de Usuários e Endereços

## 📋 Descrição

Este é um sistema web completo para gerenciamento de usuários e seus endereços, desenvolvido com Node.js, Express, Sequelize ORM e MySQL. O projeto oferece uma interface moderna e responsiva para criar, visualizar, editar e deletar usuários, bem como gerenciar seus endereços associados.

## ✨ Funcionalidades

### 👥 Gerenciamento de Usuários
- **Criar usuários**: Cadastro com nome, ocupação e opção de newsletter
- **Visualizar usuários**: Lista completa com cards visuais modernos
- **Editar usuários**: Atualização de informações pessoais
- **Deletar usuários**: Remoção segura do sistema
- **Visualização individual**: Detalhes completos do usuário

### 🏠 Gerenciamento de Endereços
- **Adicionar endereços**: Cadastro de rua, número e cidade
- **Visualizar endereços**: Lista organizada por usuário
- **Deletar endereços**: Remoção individual de endereços
- **Relacionamento**: Cada usuário pode ter múltiplos endereços

### 🎨 Interface Moderna
- **Design responsivo**: Adaptável a diferentes tamanhos de tela
- **Efeitos visuais**: Gradientes, glass morphism e animações
- **UX otimizada**: Navegação intuitiva e feedback visual
- **Ícones**: Interface rica com emojis e símbolos

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web minimalista
- **Sequelize**: ORM para JavaScript
- **MySQL2**: Driver MySQL para Node.js
- **dotenv**: Gerenciamento de variáveis de ambiente

### Frontend
- **Handlebars**: Template engine
- **CSS3**: Estilização moderna com gradientes e animações
- **JavaScript**: Interatividade do lado cliente

### Banco de Dados
- **MySQL**: Sistema de gerenciamento de banco de dados relacional

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL Server
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd sequilize-node
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
- Crie um banco MySQL
- Configure as variáveis de ambiente no arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
PORT=3000
```

4. **Inicie o servidor**
```bash
npm start
```

5. **Acesse a aplicação**
- Abra seu navegador em `http://localhost:3000`

## 🗂️ Estrutura do Projeto

```
sequilize-node/
├── db/
│   └── conn.js              # Configuração do banco de dados
├── model/
│   ├── User.js              # Model do usuário
│   └── Address.js           # Model do endereço
├── views/
│   ├── layout/
│   │   └── main.handlebars  # Layout principal
│   ├── home.handlebars      # Página inicial
│   ├── userscreate.handlebars # Criação de usuário
│   ├── userview.handlebars  # Visualização de usuário
│   └── useredit.handlebars  # Edição de usuário
├── public/
│   └── css/
│       └── styles.css       # Estilos CSS
├── index.js                 # Arquivo principal do servidor
├── package.json             # Dependências e scripts
└── .env                     # Variáveis de ambiente
```

## 🎯 Rotas da API

### Usuários
- `GET /` - Lista todos os usuários
- `GET /users/create` - Formulário de criação
- `POST /users/create` - Criar novo usuário
- `GET /users/:id` - Visualizar usuário específico
- `GET /users/edit/:id` - Formulário de edição
- `POST /users/edit/:id` - Atualizar usuário
- `POST /users/delete/:id` - Deletar usuário

### Endereços
- `POST /address/create` - Criar novo endereço
- `POST /address/delete` - Deletar endereço

## 🗄️ Modelo de Dados

### Usuário (User)
```javascript
{
  id: INTEGER (Primary Key),
  name: STRING (Required),
  occupation: STRING (Required),
  newsletter: BOOLEAN (Default: false),
  createdAt: DATE,
  updatedAt: DATE
}
```

### Endereço (Address)
```javascript
{
  id: INTEGER (Primary Key),
  street: STRING (Required),
  number: STRING (Required),
  city: STRING (Required),
  UserId: INTEGER (Foreign Key),
  createdAt: DATE,
  updatedAt: DATE
}
```

### Relacionamentos
- Um usuário pode ter múltiplos endereços (1:N)
- Cada endereço pertence a apenas um usuário

## 🎨 Características do Design

### Paleta de Cores
- **Gradiente principal**: `#667eea` → `#764ba2`
- **Fundo**: Gradiente roxo/azul
- **Cards**: Fundo branco com glass morphism
- **Textos**: Tons de cinza para hierarquia

### Efeitos Visuais
- **Glass morphism**: Fundo translúcido com blur
- **Animações**: Transições suaves em hover
- **Sombras**: Profundidade visual
- **Gradientes**: Botões e elementos interativos

### Responsividade
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação automática do grid
- **Mobile**: Layout single column com otimizações

## 🔧 Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento
npm start

# Executar testes (não configurado)
npm test
```

## 📝 Variáveis de Ambiente

| Variável | Descrição | Valor Padrão |
|----------|-----------|--------------|
| `DB_HOST` | Host do banco MySQL | localhost |
| `DB_USER` | Usuário do MySQL | - |
| `DB_PASSWORD` | Senha do MySQL | - |
| `DB_NAME` | Nome do banco | - |
| `DB_PORT` | Porta do MySQL | 3306 |
| `PORT` | Porta do servidor | 3000 |

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 🎯 Melhorias Futuras

- [ ] Autenticação de usuários
- [ ] Validação de formulários no frontend
- [ ] Paginação na lista de usuários
- [ ] Busca e filtros
- [ ] API REST completa
- [ ] Testes unitários
- [ ] Docker para deployment
- [ ] Upload de imagens de perfil

## 🐛 Problemas Conhecidos

- Atualmente não há validação de dados no frontend
- Não existe confirmação para delete de usuários/endereços
- Sem tratamento de erro para conexões de banco instáveis

## 📞 Suporte

Para suporte e dúvidas, abra uma issue no repositório do projeto.

---

**Desenvolvido com ❤️ usando Node.js e Sequelize**
