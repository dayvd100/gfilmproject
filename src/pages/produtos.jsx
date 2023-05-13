import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './tarefas.css'

function Produtos() {
  return (
    <div  className='accordion-div'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>produto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Aqui vai o estoque do produto</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Produtos;
