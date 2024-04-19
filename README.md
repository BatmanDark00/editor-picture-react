# Editor de fotos (PicShur)

`PicShur` es una aplicación de edición fotográfica diseñada para ofrecerte herramientas simples y potentes para embellecer tus imágenes con facilidad. Con una interfaz intuitiva y una amplia gama de opciones de edición, puedes transformar tus fotos en obras de arte en cuestión de segundos. Desde ajustes básicos como brillo y contraste hasta filtros creativos y efectos especiales, `PicShur` te permite dar rienda suelta a tu creatividad y mejorar tus fotos de forma rápida y sencilla. Una vez que estés satisfecho con el resultado, simplemente descarga tus imágenes y compártelas con tus amigos y familiares. ¡Haz que tus recuerdos brillen con PhotoShur


## Iniciar el proyecto
  - npm install
  - npm run dev

## Publicar aplicación
  - npm build

  

# Buenas prácticas

## :straight_ruler:  Organización de imports

1. **:package: Paquetes principales (Core packages):**
   - Bibliotecas esenciales en las que depende el proyecto.

2. **:framed_picture: Activos (Assets):**
   - Importación de imágenes, SVG e iconos .

3. **:package: Paquetes de terceros (Third-party packages):**
   - Bibliotecas externas utilizadas en el proyecto.

4. **:building_construction: Componentes compartidos (Shared components):**
   - Componentes reutilizables que son compartidos entre diferentes partes del proyecto.

5. **:bookmark_tabs: Subpáginas/Secciones (Sub pages/Sections):**
   - Importaciones específicas de subpáginas o secciones, relevantes para el módulo actual.

6. **:gear: Archivos de configuración (Configuration files):**
   - Archivos de configuración, como ajustes de entorno.

7. **:toolbox: Utilidades y librerías (Utilities and libraries):**
   - Funciones de utilidad y bibliotecas adicionales.

8. **:fishing_pole_and_fish: Hooks personalizados (Custom hooks):**
   - Hooks creados específicamente para el proyecto.

9. **:computer: APIs:**
   - Importaciones relacionadas con las llamadas a la API.

### :bulb: Ejemplo de organización de imports

```js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ** Activos **
import BackSvg from "@icons/BackSvg";
import SearchSvg from "@icons/SearchSvg";
import googleSvg from "@svg/google.svg";
import AbsoluteLogo from "@svg/AbsoluteLogo.svg";
import frontGirl from "@illustration/FrontGirl.svg";
import userImage from "@illustration/userImage.webp";

// ** Paquetes de terceros **
import { toast } from "react-toastify";
import { CircularProgress } from "@nextui-org/react";

// ** Componentes compartidos **
import Image from "@shared/Image";
import Button from "@shared/Button";
import Typography from "@shared/Typography";

// ** Componentes **
import AddFoodItem from "@components/AddFoodItem";
import CalendarPopup from "@components/CalendarPopup";

// ** Subpáginas/Secciones **
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

// ** Archivos de configuración **
import env from "@src/config";

// ** State manager **
import { useDispatch } from "react-redux";
import { setLocale } from "@src/redux/slices/language";

// ** Utilidades **
import { useStorableState } from "@utils/useStorable";
import useStorable from "@src/utils/useStorable";

// ** APIs **
import { getUserProfileApi } from "@api/auth";
import { confirmOrderApi } from "@api/cart";
```

## :briefcase: Manejar colores
Evite definir los colores directamente en sus componentes o clases CSS. Esto conduce a la inconsistencia y hace que sea difícil de actualizar o mantener su esquema de color.

### :x: Mal en css
```css
.some-class {
  color: #333333; /* Definición directa del color */
  background-color: #ffffff; /* Color codifcado */
}
```


### :x: Mal en JSX
```js
const MyComponent = () => (
  <div style={{ color: '#333333', backgroundColor: '#ffffff' }}>
    Content
  </div>
);
```
### :white_check_mark: Uso de variables CSS para la gestión global del color

```css
:root {
  --primary-color: #5A67D8;
  --secondary-color: #ED64A6;
  --text-color: #333333;
  --background-color: white;
  --warning-color: #ffcc00;
}

```
#### :bulb: Ejemplo 
```css
.header {
  background-color: var(--primary-color);
  color: var(--background-color);
}
```
Ver más https://peacockindia.mintlify.app/docs/colors

## Tipografía
La repetición de estilos en línea para elementos de texto es un problema común. No solo desordena el código, sino que también dificulta el mantenimiento y la actualización coherente de los estilos en toda la aplicación.

### :x: Ejemplo de mala práctica
```html
<h1 className="text-3xl font-bold">Login</h1>
<p className="text-[#61748E] font-medium  pt-2">
  hello world
</p>

```
### Solución
Un mejor enfoque es utilizar un componente tipográfico centralizado. Este enfoque garantiza la coherencia, se adhiere al principio DRY (Don't Repeat Yourself) y simplifica las actualizaciones de la tipografía de su sitio.

### :white_check_mark: Buena práctica
```html
<Typography variant="T_Bold_H5" className="mx-auto">Login Page</Typography>

<Button>
  <Typography variant="T_SemiBold_H6">Continue with Google</Typography>
</Button>
```

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


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

