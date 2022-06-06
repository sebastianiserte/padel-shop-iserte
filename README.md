# Proyecto de ECommerce para Curso de React de Coder House

El proyecto fue creado a partir de [Create React App](https://github.com/facebook/create-react-app).
- Tiene configurado `Firestore` como Base de datos.
- Se utiliza `Tailwind.css` y `Daisu` UI para manejar estilos.
- La navegacion se maneja mediante `React-Router`
- Se instaló `react-spinners` como solucion para manejar los tiempos de respuesta.

Puedes ver la aplicacion funcionando en https://padelshopco.vercel.app/

## Descripción 
Este es un sitio de tipo eCommerce de articulos relacionados con el deporte Padel. El usuario puede agregar articulos al carrito, quitarlos (de a uno o todos), y realizar la orden por medio de un formulario que devolvera el id de la orden guardada.

### _**Estructuras de datos**_
### Items 
`{categoria, description ,detalle, image, price, stock, title}`
### Categories 
`{key, title}`
### Orders 
`{buyer{email,name,phone}, date ,items[{cantidad,price,title}], total}`

### _**Categorias**_
- Palas(requetas)
- Zapatillas 
- Accesorios (grips, pelotas y otros articulos necesarios para el deporte)

## Comandos: 
### `npm start`
Inicia la aplicacion en <http://localhost:3000/>