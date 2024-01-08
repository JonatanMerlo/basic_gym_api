# Api Basica de Gimnasio

Esta es una api para generar usuarios y agregarles rutinas las cuales estan compuestas por series de ejercicios

## Instalacion

Para instalar los recursos necesarios para la utilizacion se debe usar el comando:

```bash
npm install
```

## Uso

Una vez instalado todos los recursos se debera usar el seguiente comando para inicializar la api

```bash
npm run dev
```

## Ejemplos de solicitudes

A continuacion se daran algunos basicos de solicitudes para poder probar la api


### Crear usuario

```bash
http://localhost:3000/api/user
```

datos en el body
```json
"name":"ejemplo",
"lastName":"ejemplo",
"email":"ejemplo@ejemplo.com"
```

### buscar algun usuario

```bash
http://localhost:3000/api/user/{id}
```

## Respuestas

Todas las solicitudes devolverán un JSON con los datos. A continuación, se proporciona un ejemplo genérico de cómo podría ser una respuesta:

```json
{
  "id": 3,
  "name": "prueba3",
  "lastName": "prueba3",
  "email": "prueba.3@prueba.com",
  "status": true,
  "routines": [
    {
      "id": 2,
      "objetive": "Fuerza",
      "initialDate": "1970-01-01T00:00:00.000Z",
      "userId": 3,
      "status": true,
      "series": [
        {
          "id": 1,
          "numbersOfTurns": 4,
          "routineId": 2,
          "status": true,
          "exercises": [
            {
              "id": 1,
              "numbersOfRepetitions": 5,
              "name": "Press Plano",
              "serieId": 1,
              "status": true
            },
            {
              "id": 2,
              "numbersOfRepetitions": 4,
              "name": "Triceps con soga",
              "serieId": 1,
              "status": true
            }
          ]
        }
      ]
    }
  ]
}
      
```
