# :ok_hand: Buenas prácticas

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