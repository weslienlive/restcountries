import { useFormik } from "formik";
import { useState } from "react";
import { ExportToCsv } from "export-to-csv";
import exportFromJSON from "export-from-json";
import { saveAs } from "file-saver";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { toXML } from "jstoxml";
import {
  View,
  Search,
  Searchbar,
  Flag,
  Info,
  CSV,
  XML,
  XLS
} from "./StyledComponents";

export default function App() {
  const [restCountries, setRestCountries] = useState({
    displayData: false,
    data: "",
    country: "",
    capital: "",
    region: "",
    subRegion: "",
    population: "",
    area: "",
    nativeName: [],
    timeZone: "",
    flag: "",
    errorMessage: false
  });

  const displayError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nenhum resultado encontrado!",
      confirmButtonColor: "#699cb3"
    });

    setRestCountries({
      errorMessage: false
    });
  };

  const generateCsvFile = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "csv file",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(restCountries.data);
  };

  const generateExcelFile = () => {
    const data = restCountries.data;
    const fileName = "xls file";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data, fileName, exportType });
  };

  const generateXmlFile = () => {
    const xmlOptions = {
      header: true,
      indent: "  "
    };
    var xml = toXML(restCountries.data, xmlOptions);
    var blob = new Blob([xml], { type: "text/xml" });
    saveAs(blob, "xml_file.xml");

    console.log(xml);
  };

  const formik = useFormik({
    initialValues: {
      location: ""
    },
    onSubmit: (event, actions) => {
      const location = event.location;
      actions.resetForm({ values: { location: "" } });
      const url = `https://restcountries.com/v3.1/name/${location}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const getNativeNames = data[0].name.nativeName;
          const native = Object.keys(getNativeNames).map((item) => {
            const nativeNames = getNativeNames;
            return nativeNames[item];
          });

          setRestCountries({
            displayData: true,
            data: data,
            country: data[0].name.common,
            capital: data[0].capital[0],
            region: data[0].region,
            subRegion: data[0].subregion,
            population: data[0].population,
            area: data[0].area,
            timeZone: data[0].timezones[0],
            nativeName: native[0].official,
            flag: data[0].flags.png
          });
        })
        .catch((error) => {
          setRestCountries({
            errorMessage: true
          });
        });
    }
  });

  return (
    <View>
      <form onSubmit={(event) => formik.handleSubmit(event)}>
        <Searchbar
          autoComplete="off"
          id="location"
          name="location"
          type="text"
          placeholder="Coloque a cidade"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
        <Search type="submit">Pesquisar</Search>
      </form>

      {restCountries.displayData && (
        <div>
          <Info>País: {restCountries.country}</Info>
          <Info>Capital: {restCountries.capital}</Info>
          <Info>Região: {restCountries.region}</Info>
          <Info>Sub Região: {restCountries.subRegion}</Info>
          <Info>População: {restCountries.population}</Info>
          <Info>Área: {restCountries.area}</Info>
          <Info>Nome Nativo: {restCountries.nativeName}</Info>
          <Info>Fuso Horário: {restCountries.timeZone}</Info>
          <Flag href={restCountries.flag}>Mostrar Bandeira</Flag>
          <br />
          <XLS onClick={generateExcelFile}>Exportar em xls</XLS>
          <XML onClick={generateXmlFile}>Exportar em xml</XML>
          <CSV onClick={generateCsvFile}>Exportar em csv</CSV>
        </div>
      )}

      {restCountries.errorMessage && displayError()}
    </View>
  );
}
