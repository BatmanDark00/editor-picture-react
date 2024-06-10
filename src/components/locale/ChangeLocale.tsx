import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import "@/assets/styles/components/locale/changeLocale.scss";
import SelectBase from "../common/SelectBase";
import spain from "@/assets/images/spain.png";
import uk from "@/assets/images/united-kingdom.png";
import traductor from "@/assets/images/traductor.png";

interface Locale {
  nativeName: string;
  locale: string;
  flag: JSX.Element;
}

export default function ChangeLocale() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectLenguage, setSelectLenguaje] = useState<string | JSX.Element>(
    <img src={traductor} alt="Traductor" />
  );
  const { i18n } = useTranslation();
  const locales: { [key: string]: Locale } = useMemo(() => ({
    English: {
      nativeName: "English",
      locale: "en",
      flag: <img src={uk} alt="EN" />,
    },
    Español: {
      nativeName: "Español",
      locale: "es",
      flag: <img src={spain} alt="ES" />,
    },
  }), []);

  useEffect(() => {
    setSelectLenguaje(locales[i18n.language]?.flag);
  }, [i18n?.language, locales]);

  const handleChangeLenguaje = (value: string) => {
    i18n.changeLanguage(value);
    setSelectLenguaje(locales[i18n.language].flag);
  };

  const openSeletorClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="selected-lenguage" onClick={openSeletorClick}>
        {selectLenguage}
      </div>

      <div className="select-lenguages" onClick={openSeletorClick}>
        {isOpen && (
          <SelectBase
            options={Object.keys(locales).map((key) => ({
              value: locales[key].locale,
              label: key,
            }))}
            value={i18n.language}
            onChange={handleChangeLenguaje}
          />
        )}
      </div>
    </>
  );
}
