import { Typography } from "@mui/material";
import "../App.css";
import { Box } from "@mui/system";
import { Fragment } from "react";
import desinfeccion from "../Assets/img/desinfeccion.png";

const Servicios = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", margin:"1rem" }}>
      <Box sx={{ borderBottom: "4px solid #78c2f0" }}>
        <Typography variant="h4">
          Nuestros Servicios
        </Typography>
      </Box>
    </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent:"center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            padding: "3rem",
          }}
        >
          <img src={desinfeccion} alt="desinfeccion" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" className="tituloTarjeta">Desinfección COVID-19</Typography>
            <Typography variant="body1" className="textoTarjeta">
              Sanitización de ambientes ante un caso sospechoso o positivo
              utilizando equipos especializados de UBV (ultra bajo volumen) en
              interiores o potentes elementos para exteriores, de acuerdo al
              protocolo del gobierno nacional.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            padding: "3rem",
          }}
        >
          <img src={desinfeccion} alt="desinfeccion" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" className="tituloTarjeta">Desinfección COVID-19</Typography>
            <Typography variant="body1" className="textoTarjeta">
              Sanitización de ambientes ante un caso sospechoso o positivo
              utilizando equipos especializados de UBV (ultra bajo volumen) en
              interiores o potentes elementos para exteriores, de acuerdo al
              protocolo del gobierno nacional.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            padding: "3rem",
          }}
        >
          <img src={desinfeccion} alt="desinfeccion" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" className="tituloTarjeta">Desinfección COVID-19</Typography>
            <Typography variant="body1" className="textoTarjeta">
              Sanitización de ambientes ante un caso sospechoso o positivo
              utilizando equipos especializados de UBV (ultra bajo volumen) en
              interiores o potentes elementos para exteriores, de acuerdo al
              protocolo del gobierno nacional.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            padding: "3rem",
          }}
        >
          <img src={desinfeccion} alt="desinfeccion" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" className="tituloTarjeta">Desinfección COVID-19</Typography>
            <Typography variant="body1" className="textoTarjeta">
              Sanitización de ambientes ante un caso sospechoso o positivo
              utilizando equipos especializados de UBV (ultra bajo volumen) en
              interiores o potentes elementos para exteriores, de acuerdo al
              protocolo del gobierno nacional.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            padding: "3rem",
          }}
        >
          <img src={desinfeccion} alt="desinfeccion" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" className="tituloTarjeta">Desinfección COVID-19</Typography>
            <Typography variant="body1" className="textoTarjeta">
              Sanitización de ambientes ante un caso sospechoso o positivo
              utilizando equipos especializados de UBV (ultra bajo volumen) en
              interiores o potentes elementos para exteriores, de acuerdo al
              protocolo del gobierno nacional.
            </Typography>
          </Box>
               
        </Box>
      </Box>
    </>
  );
};

export default Servicios;
