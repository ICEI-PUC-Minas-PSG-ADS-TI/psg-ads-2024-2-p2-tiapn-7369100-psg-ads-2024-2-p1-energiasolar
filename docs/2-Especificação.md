# Especificações do Projeto

## Personas

### 1. Lucas Medeiros

    Idade: 28 anos
    Hobby: Praticar esportes ao ar livre e fotografia
    Ocupação: Engenheiro de software
    Personalidade: Pragmático, focado e curioso
    Sonhos: Reduzir o impacto ambiental e tornar-se mais autossuficiente em energia
    Objetos e Lugares: Computador, bicicleta, workshops sobre energia sustentável
    Objetivos chave: Aprender mais sobre a viabilidade de energia solar para sua casa e ter controle sobre seu consumo energético
    Como devemos tratá-lo: Com clareza técnica e dados confiáveis, pois ele valoriza precisão nas informações
    Nunca devemos: Usar linguagem vaga ou deixar lacunas sobre detalhes técnicos

### 2. Mariana Ribeiro

    Idade: 34 anos
    Hobby: Jardinagem e decoração de interiores
    Ocupação: Arquiteta
    Personalidade: Criativa, visionária e comunicativa
    Sonhos: Incluir soluções sustentáveis em seus projetos e influenciar clientes a adotar práticas ecológicas
    Objetos e Lugares: Caderno de esboços, projetos verdes, cafés ecológicos
    Objetivos chave: Encontrar empresas confiáveis para parcerias de instalação solar e educar seus clientes sobre sustentabilidade
    Como devemos tratá-la: Com inspiração visual, referências e estudos de caso que reforcem o valor estético e funcional da energia solar
    Nunca devemos: Ignorar a importância do design e da integração visual das soluções

### 3. Carlos Silva

    Idade: 45 anos
    Hobby: Pescar e cozinhar para a família
    Ocupação: Pequeno empresário (donos de uma pousada)
    Personalidade: Confiável, paciente e prático
    Sonhos: Reduzir custos operacionais da pousada e tornar-se mais sustentável
    Objetos e Lugares: Planilhas financeiras, áreas externas da pousada
    Objetivos chave: Conhecer o custo-benefício dos painéis solares e obter orientações para economizar em longo prazo
    Como devemos tratá-lo: Com foco em retorno financeiro e praticidade da solução solar
    Nunca devemos: Apresentar um processo de instalação complicado ou demorado
>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas Medeiros  | Aprender mais sobre o tema energia solar.           | Economizar dinheiro e contribuir para o mais para o meio ambiente               |
|Mariana Ribeiro       | Encontrar empresas relacionadas a energia solar                 | Comprar e utilizar serviços de energia solar em meus projetos |
|Carlos Silva       | Receber recomendações sobre empresas recomendadas                 | Escolher negociar com uma empresa adequada para minha situação |
|Lucas Rodriguês       | Realizar uma parceria como minha empresa             | Divulgar os meus serviços |
|Orion isachi       |  criar uma conta no site usando meu e-mail ou login via redes sociais,                 |  Acessar e salvar conteúdos personalizados |
|Carlos Silva       | Recuperar minha senha por meio de um link enviado para meu e-mail                 | Continuar acessando o site sem criar uma nova conta. |

## Requisitos

A prioridade foi atribuiída a funcionalidades que são essenciais para o acesso ao site e a segurança, como por exemplo o RF-001, RF-002, RNF-002 e RNF-003.
Funcionalidades de interação são prioridade média pois não são essenciais para o acesso inicial ao sistema, mesmo que contribuam bastante para a experiência do usuário dentro do site
E as melhorias que podem ser adicionadas em fases posteriores do projeto sem comprometerem a funcionalidade do sistema foram colocadas como baixa, apenas 2 estão nesta categoria: RF-015 e RF-016

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário crie uma conta utilizando e-mail e senha ou login via redes sociais. | ALTA | 
|RF-002| Funcionalidade para recuperação de senha por meio de e-mail.   | ALTA |
|RF-003| O usuário deve poder visualizar perguntas frequentes (FAQ)  | ALTA |
|RF-004| A tela inicial deve apresentar um resumo das principais funcionalidades: artigos recentes, catálogos de produtos, perguntas frequentes e empresas destacadas.   | ALTA |
|RF-005| Deve existir uma seção com artigos, notícias, infográficos e guias sobre energia solar.   | MÉDIA |
|RF-006| Permitir que o usuário envie dúvidas específicas sobre energia solar e seus produtos.   | MÉDIA |
|RF-007| Permitir que o usuário envie feedback sobre empresas, serviços e produtos listados no aplicativo.   | MEDIA |
|RF-008| Feedbacks devem ser armazenados e associados ao perfil do usuário e ao perfil da empresa ou produto avaliado.   | MÉDIA |
|RF-009| Deve existir um sistema de classificação para empresas e serviços baseado em feedbacks.   | MÉDIA |
|RF-0010| Deve ser possível que usuários salvem publicações como favoritas para visualização posterior.   | MÉDIA |
|RF-011| O sistema deve fornecer um catálogo de produtos e serviços de empresas de energia solar, com descrição e especificações    | MÉDIA |
|RF-012| Deve haver filtros para que os usuários possam buscar produtos e serviços por categoria, localização e avaliação.   | MÉDIA |
|RF-013| Deve existir uma seção de suporte ao cliente, com contato direto via chatbot.   | MÉDIA |
|RF-014| O sistema deve exibir conteúdos personalizados, como artigos e empresas recomendadas, de acordo com o perfil e o histórico do usuário.   | MÉDIA |
|RF-015| Permitir que o usuário acesse um histórico de atendimentos com o suporte ao cliente.   | BAIXA |
|RF-016| Manter a sessão ativa do usuario até o logout.   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Capacidade de processar consultas e retornar resultados relevantes em até 2 segundos. | ALTA |
|RNF-002| Criptografia dos dados sensíveis, como informações pessoais e financeiras dos usuários. |  ALTA |
|RNF-003| Deve ser garantido disponibilidade do sistema de 99,9%, minimizando o tempo de inatividade. |  ALTA |
|RNF-004| Autenticação de dois fatores para acessos de clientes e empresas parceiras. |  ALTA |
|RNF-005| Controles de acesso baseados em função para diferenciar permissões de usuários e administradores. |  ALTA |
|RNF-006| O sistema deve ter uma interface amigável e intuitiva para clientes e empresas parceiras. |  MÉDIA | 
|RNF-007| Capacidade de lidar com um alto volume de usuários simultâneos |  MÉDIA | 
|RNF-008| O sistema deve provêr funções de acessibilidade para usuários com necessidades especiais. |  MÉDIA | 
|RNF-009| Existência de backup diário para proteger os dados dos usuários e da empresa. |  MÉDIA | 
|RNF-010| Mecanismo de recuperação rápida em caso de falhas. |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O desenvolvimento deve ser realizado utilizando as tecnologias definidas, como JavaScript, Node.js e MySQL        |
|03| Toda a documentação deve ser entregue no formato definido pela instituição
|04| Apenas o banco de dados MySQL pode ser utilizado no projeto
|05| O aplicativo será otimizado apenas para os navegadores Chrome e Edge, sem garantia de compatibilidade com outros navegadores ou sistemas operacionais antigos.
|06| O projeto não se compromete em solucionar questões como a variação de preços regionais ou a necessidade de visitas técnicas.
|07| As senhas dos usuários serão armazenadas em texto simples no banco de dados, sem criptografia ou hash nesta versão do projeto.
