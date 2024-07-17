import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, InputLabel } from '@mui/material';
import { CustomInput } from './common/CustomInput';
import { CustomSelect } from './common/CustomSelect';

const domains = [
  "Domain 1",
  "Domain 2",
  "Domain 3",
  "Domain 4",
  "Domain 5",
  "Domain 6",
  "Domain 7",
  "Domain 8",
  "Domain 9",
  "Domain 10",
]

const dataProducts = [
  "Data product 1",
  "Data product 2",
  "Data product 3",
  "Data product 4",
  "Data product 5",
  "Data product 6",
  "Data product 7",
  "Data product 8",
  "Data product 9",
  "Data product 10",
]

const platforms = [
  "Platform 1",
  "Platform 2",
  "Platform 3",
  "Platform 4",
  "Platform 5",
  "Platform 6",
  "Platform 7",
  "Platform 8",
  "Platform 9",
  "Platform 10",
]

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle sx={{ m: 0, p: 2, paddingLeft : 3 }} id="customized-dialog-title">
          Create Pipeline
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="name">
              Name*
            </InputLabel>
            <CustomInput className='input' id="name" placeholder="Name" />
          </FormControl>
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel shrink htmlFor="description">
              Description*
            </InputLabel>
            <textarea className='input' style={{}} id='description' placeholder="Description" />
          </FormControl>
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel shrink htmlFor="domains">
              Domains*
            </InputLabel>
            <CustomSelect data={domains} id={"domains"} selectBy={""} placeholder={"Domains"} />
          </FormControl>
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel shrink htmlFor="dataProducts">
              Data products*
            </InputLabel>
            <CustomSelect data={dataProducts} id={"dataProducts"} selectBy={""} placeholder={"Data products"} />
          </FormControl>
          <FormControl style={{ marginTop: 10 }} variant="standard">
            <InputLabel shrink htmlFor="platforms">
              Platforms*
            </InputLabel>
            <CustomSelect data={platforms} id={"platforms"} selectBy={""} placeholder={"Platforms"} />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} style={{ borderWidth: 1, borderColor: '#d3d3d3', backgroundColor: '#FFF', cursor: 'pointer', padding: "10px 20px", borderRadius: 4 }}>Cancel</button>
          <div  />
          <button onClick={handleClose} style={{ borderWidth: 0, backgroundColor: '#1976D2', cursor: 'pointer', padding: "10px 20px", color: '#FFF', borderRadius: 4 }}>Create</button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
