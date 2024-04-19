# :name_badge: Convenciones de nomenclatura en el desarrollo de software

Adoptar convenciones de nomenclatura eficaces es crucial en el desarrollo de software para garantizar la claridad del código, su mantenimiento y la facilidad de colaboración.

## <span style="color:yellow"> CamelCase</span>



####  <span style="color:orange">Nombre de objetos</span>
Las claves de los objetos de estado deben ser descriptivas y seguir camelCase.


:white_check_mark: Bien
```js
{
  firstName: "",
  lastName: "",
  paymentId: "",
}

```
:x: Mal
```js
{
  first: "",        // No es descriptivo
  lname: "",        // Nombre inconsistent
  id_payment: "",   // Mezcla de nombres
}
```

#### <span style="color:orange">Nombre de Hooks</span>
Combine "uso", acción y recurso para mayor claridad.

:white_check_mark: Bien
```js
function useLocalStorage() { /* ... */ }
function useClickOutside() { /* ... */ }

function useGetUserProfileAPI() { /* ... función swr api */ }
function useUserLoginAPI() { /* ... función swr api*/ }

```

:x: Mal
```js
function getUserProfile() { /* ... */ }   //No esta claro que sea un hook
function loginAPI() { /* ... */ }         // Debe empezar por "uso" y describir la acción

```
#### <span style="color:orange">Nombre de funciones</span>
Los nombres de las funciones deben indicar claramente su finalidad y acción.

:white_check_mark: Bien
```js
function handleChange() { /* ... */ }
function handleSubmit() { /* ... */ }
function getUserProfileAPI() { /* ... */ } // Función de llamada a la API REST

```

:x: Mal
```js
function handle() { /* ... */ }             // Demasiado vago
function submitData() { /* ... */ }         // El verbo debe ir primero, se debe espicificar el tipo de datos que se envia


```
## PascalCase

- Nombre de clases
- Funciones constructoras
- Nombre de componentes

## snake_case

- Comúnmente utilizado para campos de bases de datos y nombres de tablas.

## UPPER_CASE_SNAKE_CASE

- Se utiliza para constantes y nombres de variables de entorno.

## kebab-case

- Se utiliza para nombres de clases CSS y slugs de URL.
