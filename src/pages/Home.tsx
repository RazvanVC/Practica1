import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonLabel,
} from "@ionic/react";

const Home: React.FC = () => {
  const numberOfCards = 10;

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol color="white">
                {/**
                 * @todo: Make a header with a title, a subtitle and a two buttons, one primary and one secondary
                 */}
                <IonItem>
                  <IonLabel>
                    <h1 style={{ textAlign: "center" }}>Album Example</h1>
                    <h2 style={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
                      Something short and leading about the collection below—its
                      contents, the creator, etc. Make it short and sweet, but
                      not too short so folks don't simply skip over it entirely.
                    </h2>
                    <IonGrid>
                      <IonRow>
                        <IonCol
                          style={{ "padding": "0px" }}
                          size="0"
                          sizeSm="0"
                          sizeMd="0"
                          sizeLg="3"
                          sizeXl="3"
                        ></IonCol>
                        <IonCol
                          size="6"
                        >
                          <IonButton expand={"block"}>
                            Main call to action
                          </IonButton>
                        </IonCol>

                        <IonCol
                          size="6"
                          sizeSm="6"
                          sizeMd="6"
                          sizeLg="3"
                          sizeXl="3"
                        >
                          <IonButton color={"light"} expand={"block"} >
                            Secondary action
                          </IonButton>
                        </IonCol>
                        <IonCol
                          style={{ "padding": "0px" }}
                          size="0"
                          sizeSm="0"
                          sizeMd="0"
                          sizeLg="3"
                          sizeXl="3"
                        ></IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              {/**
               * @todo: Cards mapping with flex layout and responsive design
               */}
              {Array.from({ length: numberOfCards }).map((_, index) => (
                <IonCol
                  size="12"
                  sizeSm="6"
                  sizeMd="6"
                  sizeLg="4"
                  sizeXl="4"
                  key={index}
                >
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardContent>
                      Here's a small text description for the card content.
                      Nothing more, nothing less.
                    </IonCardContent>
                    <IonButton
                      style={{
                        "padding-left": "10px",
                        "padding-bottom": "10px",
                      }}
                    >
                      View
                    </IonButton>
                    <IonButton
                      style={{
                        "padding-bottom": "10px",
                        "margin-left": "-10px",
                      }}
                    >
                      Edit
                    </IonButton>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
