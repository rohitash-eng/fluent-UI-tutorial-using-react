import { DefaultEffects, makeStyles } from '@fluentui/react';
import { Button, Caption1, Card, CardHeader, CardPreview, LargeTitle, Subtitle1, tokens } from '@fluentui/react-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "36px"
  },

  card: {
    maxWidth: "100%",
    height: "fit-content"
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },
  text: { margin: "0" },
  aboutTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
    marginTop: '24px'
  },
  aboutH1Tag: {
    backgroundColor: '#ccc',
    color: '#333',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: DefaultEffects.elevation8,
    margin: '0 0 12px'
  },
  grayBackground: {
    backgroundColor: tokens.colorBrandBackground2Hover,
  },
  logoBadge: {
    padding: "5px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
  smallRadius: { borderRadius: tokens.borderRadiusSmall },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Subtitle1 as="h4" block className={styles.title}>
      {children}
    </Subtitle1>
  );
};
function AboutUs() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  }
  const styles = useStyles();
  return (
    <>
      <div className={styles.main}>
        <div className="ms-Grid">
          <div className="ms-Grid-row c">
            <div className='ms-md6'>
              <Title>About Us</Title>
            </div>
          </div>
        </div>
        <section className={styles.section}>
          <Card className={styles.card}>
            <LargeTitle>About Us</LargeTitle>
          </Card>
        </section>

        <section>
          <Card className={styles.card} orientation="horizontal">
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div className='ms-md12'>
                  <LargeTitle>About Us</LargeTitle>
                </div>
                <div className='ms-md12'>
                  <LargeTitle>About Us</LargeTitle>
                </div>
                <div className='ms-md12'>
                  <LargeTitle>About Us</LargeTitle>
                </div>
              </div>
            </div>
            <Button className="btn btn-success" onClick={back}>Back</Button>
          </Card>
        </section>
      </div>

    </>
  );
}

export default AboutUs;
