import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
// if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';

import { socialMedia } from "../../data/socialMedia";

const Social = ({ color }) => {
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, facebook, github, homepage } = socialMedia;

  // if you add twitter , it will be
  // const { instagram, facebook, github, homepage, twitter } = socialMedia;
  {
    //  and add this code to line 98,
    /* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
       <TwitterIcon className={classes.snsIcon} />
    </Grid> */
  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <a href={homepage}>
        <HomeIcon
          className="px-2"
          color={color ? "primary" : "secondary"}
        />
      </a>
      <a href={facebook}>
        <FacebookIcon
          className="px-2"
          color={color ? "primary" : "secondary"}
        />
      </a>
      <a href={instagram}>
        <InstagramIcon
          className="px-2"
          color={color ? "primary" : "secondary"}
        />
      </a>
      <a href={github}>
        <GitHubIcon
          className="px-2"
          color={color ? "primary" : "secondary"}
        />
      </a>
    </div>
  );
};

export default Social;