import { Box, Typography } from "@mui/material";

const Inicio = () => {
  return (
    <>
    <Box>
      <Box sx={{ display: "flex",flexDirection:"column", justifyContent: "center", margin: "1rem" }}>
        <Box sx={{ borderBottom: "4px solid #78c2f0" }}>
          <Typography variant="h4">Bienvenidos a Clean ALP</Typography>
        </Box>
        <Box sx={{width:"1170px"}}>
        <Typography variant="body1" sx={{display:"flex", justifyContent:"center"}}>
          Tenemos el agrado de dirigirnos a ustedes con el fin de brindar una
          propuesta diferente en lo que a servicio y eficiencia se refiere,
          acompañado de la más alta tecnología y profesionalismo. Nuestra firma
          basa su progreso en el crecimiento de las empresas a las cuales
          atendemos, porque logramos que ahorren dedicación, personal, gastos
          administrativos, responsabilidades tributarias, seguros de vida y de
          accidentes laborales.
        </Typography>
      </Box>
      </Box>
      </Box>
    </>
  );
};

export default Inicio;
