# Criação projeto back-end

Executar no terminal:

```
npx aka-demy/create-express-app
```

* Ok to processed? -> y
* Give a nem for the app -> back-end
* Choose a language -> Javascript
* Choose a template engine -> None
* Choose a package manager -> npm

```
cd back-end
```

# Inicialização do prisma

```
npx prisma init
```

# Criação do Prisma Client

Toda vez que o arquivo schema.prisma é alterado, é necessário executar o no terminal:
```
npx prisma generate
```