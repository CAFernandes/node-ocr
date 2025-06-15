# 📄 API OCR - Extração de Texto e Dados

Uma API REST desenvolvida em Node.js e TypeScript para extração de texto de imagens e PDFs usando OCR (Optical Character Recognition), com capacidade de identificar automaticamente documentos brasileiros e informações estruturadas.

## 🚀 Funcionalidades

- **OCR em Imagens**: Extração de texto de imagens (JPG, JPEG, PNG) usando Tesseract.js
- **Processamento de PDF**: Extração de texto de documentos PDF
- **Detecção Automática**: Identificação automática de documentos brasileiros (CPF, CNPJ, RG, etc.)
- **Validação de Dados**: Reconhecimento de padrões como emails, telefones, CEP, cartões de crédito
- **Upload de Arquivos**: Sistema seguro de upload com Multer
- **API RESTful**: Interface simples e intuitiva

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web minimalista
- **Tesseract.js** - Biblioteca de OCR para reconhecimento de texto
- **pdf-parse** - Parser para extração de texto de PDFs
- **Multer** - Middleware para upload de arquivos
- **pnpm** - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
OCR/
├── src/
│   ├── app.ts                 # Configuração principal da aplicação
│   ├── modules/
│   │   ├── image/             # Módulo para processamento de imagens
│   │   │   ├── controller/    # Controladores da API
│   │   │   ├── routers/       # Definição de rotas
│   │   │   └── services/      # Lógica de negócio OCR
│   │   └── pdf/               # Módulo para processamento de PDFs
│   │       ├── controller/    # Controladores da API
│   │       ├── routers/       # Definição de rotas
│   │       └── services/      # Lógica de negócio PDF
│   └── shared/
│       ├── upload.ts          # Configuração do Multer
│       └── helpers/
│           └── Lib.ts         # Expressões regulares e utilitários
├── temp/                      # Diretório temporário para uploads
├── server.ts                  # Ponto de entrada da aplicação
├── package.json
├── tsconfig.json
└── por.traineddata           # Modelo de treinamento Tesseract (Português)
```

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- pnpm (recomendado) ou npm

### Passos de Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd OCR
```

2. **Instale as dependências:**
```bash
pnpm install
# ou
npm install
```

3. **Configure o diretório temporário:**
```bash
mkdir temp
```

4. **Inicie o servidor de desenvolvimento:**
```bash
pnpm run start:dev
# ou
npm run start:dev
```

O servidor estará rodando na porta `3000`: http://localhost:3000

## 📖 Documentação da API

### Base URL
```
http://localhost:3000
```

### Endpoints Disponíveis

#### 📷 Processamento de Imagens

**POST** `/image`

Realiza OCR em imagens (JPG, JPEG, PNG) e extrai texto com dados estruturados.

**Parâmetros:**
- `file` (FormData): Arquivo de imagem a ser processado

**Exemplo de Requisição:**
```bash
curl -X POST \
  http://localhost:3000/image \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@documento.jpg'
```

**Exemplo de Resposta:**
```json
{
  "text": "NOME: João da Silva\nCPF: 123.456.789-00\nEmail: joao@email.com",
  "findData": [
    { "cpf": "123.456.789-00" },
    { "email": "joao@email.com" }
  ]
}
```

#### 📄 Processamento de PDFs

**POST** `/pdf`

Extrai texto de documentos PDF e identifica dados estruturados.

**Parâmetros:**
- `file` (FormData): Arquivo PDF a ser processado

**Exemplo de Requisição:**
```bash
curl -X POST \
  http://localhost:3000/pdf \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@documento.pdf'
```

**Exemplo de Resposta:**
```json
{
  "text": "Razão Social: Empresa LTDA\nCNPJ: 12.345.678/0001-90",
  "findData": [
    { "cnpj": "12.345.678/0001-90" }
  ]
}
```

### 🔍 Tipos de Dados Reconhecidos

A API é capaz de identificar automaticamente os seguintes padrões:

#### Documentos Brasileiros
- **CPF**: 123.456.789-00
- **CNPJ**: 12.345.678/0001-90
- **RG**: 12.345.678-9
- **CNH**: 123.456.789-01
- **PIS**: 123.45678.90-1
- **Título de Eleitor**: 1234567890-12

#### Contatos
- **Email**: usuario@dominio.com
- **Telefone**: (11) 91234-5678
- **CEP**: 12345-678

#### Cartões de Crédito
- **Visa**: 4111111111111111
- **Mastercard**: 5555555555554444
- **American Express**: 374245455400126
- **Diners Club**: 30569309025904
- **Discover**: 6011111111111117
- **Elo**: 6362970000457013
- **Hipercard**: 6062825624254001

#### Outros
- **URLs**: https://exemplo.com
- **Datas**: DD/MM/AAAA, AAAA-MM-DD
- **Horários**: HH:MM:SS

## ⚙️ Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
pnpm run start:dev

# Executar testes (ainda não implementados)
pnpm run test
```

## 🔒 Configurações de Segurança

### CORS
O projeto está configurado com CORS liberado para desenvolvimento:
```typescript
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'POST');
```

### Upload de Arquivos
- Arquivos são salvos temporariamente na pasta `temp/`
- Nomes únicos são gerados usando timestamp
- Arquivos são removidos automaticamente após processamento

## 🚨 Tratamento de Erros

### Códigos de Status HTTP

- **200**: Sucesso na operação
- **400**: Arquivo não encontrado ou formato inválido
- **500**: Erro interno do servidor

### Exemplos de Erros

```json
{
  "error": "File not found"
}
```

```json
{
  "error": "File is not an image"
}
```

## 🧪 Testando a API

### Usando cURL

**Teste com imagem:**
```bash
curl -X POST \
  http://localhost:3000/image \
  -F 'file=@/path/to/your/document.jpg'
```

**Teste com PDF:**
```bash
curl -X POST \
  http://localhost:3000/pdf \
  -F 'file=@/path/to/your/document.pdf'
```

### Usando Postman

1. Crie uma nova requisição POST
2. Configure a URL: `http://localhost:3000/image` ou `http://localhost:3000/pdf`
3. Vá para a aba "Body"
4. Selecione "form-data"
5. Adicione uma chave "file" do tipo "File"
6. Selecione seu arquivo
7. Envie a requisição

## 📋 Roadmap

- [ ] Implementar testes unitários e integração
- [ ] Adicionar autenticação JWT
- [ ] Suporte para mais formatos de imagem
- [ ] API de validação de documentos
- [ ] Rate limiting
- [ ] Docker containerization
- [ ] Documentação com Swagger
- [ ] Logs estruturados
- [ ] Métricas e monitoramento

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências foram instaladas corretamente
2. Certifique-se de que a pasta `temp/` existe
3. Verifique se a porta 3000 não está sendo usada por outro processo
4. Abra uma issue no GitHub com detalhes do problema

---

**Nota**: Esta API foi desenvolvida para fins educacionais e de desenvolvimento. Para uso em produção, considere implementar medidas adicionais de segurança, validação e otimização.
