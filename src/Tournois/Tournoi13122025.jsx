import { Typography } from "@mui/material";
import useStyles from "./style";

const TournoiText13122025 = () => {
  const classes = useStyles()

  return (
  <div className={classes.alignement}>
    <Typography variant='h4' className={classes.titlePaper}>Tournoi du 13/12/2025</Typography>
    <br/>
    <Typography variant='h6' className={classes.titleDecoration}>Participants</Typography>
    <br/>
    <Typography>Anthony BARBIER</Typography>
    <Typography>Selim TLATLI</Typography>
    <Typography>Matthias MOYON</Typography>
    <Typography>Silene YU</Typography>
    <Typography>Victor CAI</Typography>
    <br/>
    <Typography variant='h6' className={classes.titleDecoration}>Règles</Typography>
    <p>Patati Patata ezlgjernjghhernhklkzrjnglregjrklhnrkldnbdflbnedtkl</p>
    <p>Patati Patata ezlgjernjghhernhklkzrjnglregjrklhnrkldnbdflbnedtkl</p>
    <p>Patati Patata ezlgjernjghhernhklkzrjnglregjrklhnrkldnbdflbnedtkl</p>
    <p>Patati Patata ezlgjernjghhernhklkzrjnglregjrklhnrkldnbdflbnedtkl</p>
  </div>
)}

export default TournoiText13122025;