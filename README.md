# Cars-Rental

# Cadastro de carro
**RF**
Deve ser possível cadastrar um carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastrado deve ser um administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos carros disponíveis.
Deve ser possível listar todos carros disponíveis pelo nome da categoria.
Deve ser possível listar todos carros disponíveis pelo nome da marca.
Deve ser possível listar todos carros disponíveis pelo nome do carro.

**RN**

O usuário não precisa estar autenticado no sistema.


# Cadastro de especificações do carro

**RF**

Deve ser possível cadastrar uma especificação para o carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**

Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já cadastrada para o mesmo carro.
O usuário responsável pelo cadastrado deve ser um administrador.


# Cadastro de imagens do carro.

**RF**
Deve ser possível cadastrar uma imagem do carro.
Deve ser possível listar todos os carros.

**RNF**

Utilizar o multer para upload de arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastrado deve ser um administrador.


# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**

O aluguel deve ter a duração minima de 24 horas.
Não deve ser possível cadastrar uma novo aluguel caso já exista o mesmo usuário.
Não deve ser possível cadastrar uma novo aluguel caso já exista o mesmo carro.
