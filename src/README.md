# GifExpertApp

Este es mi repositorio del proyecto de React

React Cheat Sheet

Para crear un modulo nuevo desde ctrl alt r:
	// es7: rafce -> code to create a component

No olvidar que se tiene que ingresar al directorio de la aplicacion y 
posterior, npm start, para que se levante la aplicacion
	


Como correr una app en CRA

	npm start

Cómo correr una app en VITE
	yarn dev


Fragment es igual que <></>, para retornar varios elementos desde un
nodo padre

JSON.stringify(objeto); se encarga de mostrar en cadena una colección
completa o un objeto

Se recomienda utilizar las funciones por fuera de la declaración
del componente



Cómo agregar estilos a la aplicación:

	importar el archivo de estilos desde la app main

Para poder hacer uso de los props, es más común, desestructurizar los
elementos que queremos obtener, dentro del argumento de la función
flecha del nombre del componente


Los hooks, son funciones

sintaxys: const [desestruc, setDesestruct] = useState(initialValue);
Cuando cambia el estado, todo el componente se vuelve a ejecutar

Pruebas:
Unitarias (solo un componente), Integracion (Varios componentes juntos)



Para iniciar a trabajar con las pruebas, necesitamos de una tecnología
llamada jest, se installa con:
	 yarn add --dev jest
y dentro de package.json, se modifica el contenido y se agrega un script
nuevo llamado "test": "jest --watchAll", para que se recargue de forma 
automática aquellas pruebas que tienen que realizarse



Para ayudarnos con jest,  instalamos otra depencencia de desarrollo:
	yarn add --dev @types/jest


Para poder configurar correctamente el entorno de pruebas, se deben
de descargar e instalar las dependencias de desarrollo:
	yarn add --dev babel-jest @babel/core @babel/preset-env


Creamos un archivo en el root del proyecto llamado babel.config.cjs
IMPORTANTE: Se debe cambiar la extensión del archivo de js a cjs, para
que se puedan usar de forma exitósa las referencias 

el test suite ejecuta el archivo nativo/original

para iniciar con el entorno de pruebas desde la terminal, se ejecuta el 
script de yarn test (nosotros agregamos ese script previamente)


en las pruebas siempre se van a evaluar algun punto inicial, algún estímulo
y algun resultado final 


Cuando trabajamos con pruebas asíncronas, dentro de nuestro test y al llamar
a la función en cuestión, debemos irlas administrando como se deben manejar
las promesas, es decir, con then, catch, finally

despues del parámetro de test, se manda la funcion flecha, pero debe llamarse
done, este es llamado dentro de la prueba para indicar que ahí termina
de lo contrario, manda error


Para hacer pruebas con react, JEST es bueno para funciones e interacciones

pero React-Testing-Libray es mejor para interacciones con el DOM, por eso
desde el sitio de JEST se recomienda usar un react testing library



Cuando trabajamos en una nueva aplicación, debemos instalar los modulos 
de node para poder levantar nuestra aplicación

el comando más sencillo para hacerlo es a través de:
	yarn


Los useStates deben de importarse de React


useEffect es un hook de react que sirve para disparar efectos secundarios

En la función de map, se debe agregar de forma explícita el return, esto
es cuando usamos las llaves para hacer uso de estas. Si usamos solo los
paréntesis, entonces no hay mayor problema

Un hook no es más que una función que regresa algo


Para generar una carpeta de distribución, cuando ya queremos subir el
proyecto en producción, se ejecuta el comando:
	yarn build



Para iniciar con el controlador de versione, primero necesitamos usar
un par de comandos de git para que esto sea posible

	git init, se recomienda renombar cambiar el nombre de la rama
	a main

	git add . prepara todos los archivos

	git checkout -- . reconstruye el proyecto y lo regresa a como
	se quedó en el commit

