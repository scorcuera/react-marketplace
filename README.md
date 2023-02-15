# Recursos para el Proyecto de E-commerce

En este repositorio encontrarás ejemplos de funcionalidades que tendrás que incorporar en el sexto proyecto del bootcamp (construir la parte frontal del dashboard de un marketplace).

## Inicializar el proyecto

Para inicializar el proyecto, primero hay que instalar las dependencias del package.json:

```node
npm i
```

Seguidamente, podemos lanzar la aplicación:

```node
npm run dev
```

Por otra parte, para correr la API en un servidor local:

```node
json-server --watch ./api/products.json
```
:exclamation:
Este último comando no lo puedes utilizar en `main`, ya que ahí no existe la carpeta `api`.

## Ramas

En las distintas ramas encontrarás los recursos que te ayudarán.
Por ejemplo, en la rama `feature/how-to-upload-images` está el código relativo a cómo subir y enviar una imagen a la fake api.