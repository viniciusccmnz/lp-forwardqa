# ForwardQA - Landing Page

Esta é a documentação da landing page do ForwardQA, uma empresa especializada em Quality Assurance (QA) para softwares. A landing page é uma Single-Page Application (SPA) desenvolvida com HTML, CSS e JavaScript vanilla.

## Estrutura do Projeto

```
lp-forwardqa/
├── images/           # Pasta com imagens e ícones do site
├── index.html        # Arquivo HTML principal
├── styles.css        # Estilos CSS
├── script.js         # JavaScript do site
└── README.md         # Esta documentação
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site
- **CSS3**: Estilos responsivos, animações e layouts flexíveis
- **JavaScript (ES6+)**: Interações, animações e funcionalidades
- **FontAwesome**: Biblioteca de ícones
- **Google Fonts**: Fonte Poppins para tipografia
- **Formspree**: Serviço para gerenciamento de formulário de contato

## Seções do Site

A landing page inclui as seguintes seções:

1. **Header/Navegação**: Menu de navegação responsivo com links para as seções
2. **Hero**: Seção inicial com animação de texto digitado
3. **About**: Informações sobre a empresa
4. **Services**: Serviços oferecidos pela empresa
5. **Method**: Metodologia de trabalho da empresa
6. **Why Us**: Diferenciais da empresa
7. **Contact**: Formulário de contato e informações para contato
8. **Footer**: Links para navegação, informações de contato e recursos adicionais

## Otimização para SEO

O site foi otimizado para mecanismos de busca (SEO) visando melhorar o ranqueamento no Google para o nicho de Quality Assurance:

### 1. Meta Tags e Dados Estruturados

- **Title Tag Otimizada**: "ForwardQA - Quality Assurance and Software Testing Services"
- **Meta Description**: Descrição clara dos serviços oferecidos (160 caracteres)
- **Meta Keywords**: Palavras-chave relevantes para o nicho de QA
- **Open Graph Tags**: Para melhorar o compartilhamento em redes sociais
- **Canonical URL**: Para evitar problemas de conteúdo duplicado
- **JSON-LD Schema.org**: Dados estruturados para informar os mecanismos de busca sobre o tipo de negócio (ProfessionalService)

### 2. Estrutura Semântica

- **Hierarquia de Cabeçalhos**: Uso correto de H1, H2, H3 para indicar a estrutura do conteúdo
- **Tags Semânticas**: Uso de `<section>`, `<header>`, `<footer>`, etc.
- **Texto Alt**: Descrições alternativas para imagens
- **Atributos ARIA**: Para melhorar a acessibilidade, o que também impacta o SEO

### 3. Conteúdo Rico em Palavras-chave

- Conteúdo descritivo focado em termos relevantes para o nicho
- Seção destacando especialização em validação de diversos tipos de software (AI, Mobile, Web)
- Footer com links internos relevantes para ajudar na indexação

## Funcionalidades Principais

### 1. Animações

- **Animações ao rolar**: Elementos surgem com efeitos fade quando o usuário rola a página
- **Efeito de digitação**: Na seção Hero, o texto é digitado com efeito de máquina de escrever

### 2. Formulário de Contato

O formulário de contato utiliza o serviço Formspree para enviar as mensagens diretamente para o email cadastrado.

**Como funciona:**
1. O usuário preenche o formulário
2. Ao enviar, os dados são enviados para o Formspree
3. O Formspree encaminha a mensagem para o email configurado
4. O usuário recebe feedback visual sobre o envio bem-sucedido

**Configuração do Formspree:**
- O endpoint atual é: `https://formspree.io/f/xnndjzpv`
- Para alterar o email que recebe as mensagens, acesse a [dashboard do Formspree](https://formspree.io/forms)

### 3. Botão WhatsApp

O botão WhatsApp direciona os visitantes para uma conversa direta no WhatsApp com um número predefinido.

**Configuração:**
- O número atual está definido em `script.js` como `+5521999999999`
- Para alterar, localize a linha com `const phoneNumber = '+5521999999999';` em script.js

## Passos para Rankeamento no Google

Para garantir que o site seja adequadamente indexado e ranqueado pelo Google, depois da implementação:

1. **Hospedar o site**: Escolha um serviço de hospedagem confiável com bom tempo de resposta
2. **Configurar domínio**: Idealmente com HTTPS ativado (fator de rankeamento)
3. **Submeter ao Google Search Console**: 
   - Crie uma conta em https://search.google.com/search-console
   - Verifique a propriedade do site
   - Envie o sitemap.xml (pode ser criado com ferramentas gratuitas online)
   - Solicite indexação da URL
4. **Configurar Google Analytics**: Para monitorar o tráfego e comportamento dos usuários
5. **Criar ou atualizar o perfil Google Business**: Importante para SEO local

## Modificando o Site

### Alterando Textos

Todos os textos estão diretamente no arquivo `index.html`. Para modificar qualquer conteúdo textual, edite este arquivo.

### Alterando Estilos

Os estilos estão organizados por seções no arquivo `styles.css`. Cada seção tem seus próprios estilos devidamente comentados.

Para alterar cores principais, modifique as variáveis CSS no início do arquivo:

```css
:root {
    --primary-bg: #0a0f2c;     /* Fundo principal */
    --text-color: #ffffff;     /* Cor do texto */
    --accent-color: #4287f5;   /* Cor de destaque */
    --secondary-bg: #131c4a;   /* Fundo secundário */
    --card-bg: #1c2755;        /* Fundo dos cards */
    --whatsapp-color: #25D366; /* Cor do botão WhatsApp */
}
```

### Alterando Funcionalidades JavaScript

O arquivo `script.js` contém todas as funcionalidades interativas. As principais seções incluem:

- **Navegação**: Menu mobile e navegação suave
- **Animações**: Efeitos de scroll e digitação
- **Formulário**: Validação e envio do formulário de contato
- **WhatsApp**: Configuração do botão de WhatsApp

### Adicionando Novas Seções

Para adicionar uma nova seção:

1. Adicione o HTML no arquivo `index.html`
2. Adicione o link na navegação (se necessário)
3. Adicione os estilos CSS em `styles.css`
4. Adicione qualquer funcionalidade JavaScript em `script.js`

## Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo, animações e efeitos
- **Tablet**: Ajustes de layout e espaçamento
- **Mobile**: Menu hambúrguer, layouts em coluna única

Os breakpoints principais estão em:
- 992px (tablets grandes)
- 768px (tablets e telefones em modo paisagem)
- 480px (smartphones)

## Hospedagem

O site pode ser hospedado em qualquer serviço que suporte sites estáticos como:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Qualquer servidor web tradicional

## Otimizações Recomendadas

Para melhorar ainda mais o desempenho do site, considere:

1. **Otimizar imagens**: Comprima as imagens na pasta `images/`
2. **Minificar arquivos**: Use ferramentas para minificar CSS e JavaScript
3. **Lazy loading**: Implemente lazy loading para imagens que não estão na primeira dobra
4. **Backlinks**: Trabalhe em uma estratégia para conseguir links de outros sites relevantes
5. **Blog**: Considere adicionar uma seção de blog para conteúdo sobre QA e testes de software

## Suporte

Para dúvidas ou suporte relacionado a este site, entre em contato com o desenvolvedor ou mantenha este README atualizado com informações de contato relevantes.

---

© 2025 ForwardQA - Todos os direitos reservados 