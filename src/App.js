import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  const [expanded, setExpanded] = React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'gray' }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel2`} onChange={handleChange(`panel2`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'blue' }}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel3`} onChange={handleChange(`panel3`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'green' }}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel4`} onChange={handleChange(`panel4`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'yellow' }}
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel5`} onChange={handleChange(`panel5`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'gray' }}
        >
          <Typography>Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel6`} onChange={handleChange(`panel6`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'blue' }}
        >
          <Typography>Accordion 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel7`} onChange={handleChange(`panel7`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'green' }}
        >
          <Typography>Accordion 7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel8`} onChange={handleChange(`panel8`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'yellow' }}
        >
          <Typography>Accordion 8</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel9`} onChange={handleChange(`panel9`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'gray' }}
        >
          <Typography>Accordion 9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel10`} onChange={handleChange(`panel10`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'blue' }}
        >
          <Typography>Accordion 10</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel11`} onChange={handleChange(`panel11`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'green' }}
        >
          <Typography>Accordion 11</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel12`} onChange={handleChange(`panel12`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'yellow' }}
        >
          <Typography>Accordion 12</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel13`} onChange={handleChange(`panel13`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'gray' }}
        >
          <Typography>Accordion 13</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel14`} onChange={handleChange(`panel14`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'blue' }}
        >
          <Typography>Accordion 14</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel15`} onChange={handleChange(`panel15`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'green' }}
        >
          <Typography>Accordion 15</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === `panel16`} onChange={handleChange(`panel16`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ position: 'sticky', top: '0px', backgroundColor: 'yellow' }}
        >
          <Typography>Accordion 16</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography style={{ paddingBottom: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>

        </AccordionDetails>
      </Accordion>

    </div>
  );
}