import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonTitle, IonCheckbox, IonIcon, IonList, IonText, IonGrid, IonRow, IonCol, IonImg, IonCardHeader } from '@ionic/react';
import { arrowBackOutline, shareSocialOutline, heartOutline, starSharp, arrowForwardOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './page2.css';



const page2: React.FC = () => {

  // const history = useHistory()

  return (
    <IonPage>
       <IonContent className='background-img'>
       {/* <IonHeader className='ion-head' > */}
        <IonItem lines='none' className='ion-icon' color="transparent">
          <IonIcon slot='start' size='large' icon={arrowBackOutline}></IonIcon>
          <IonIcon slot='end' size='large' icon={shareSocialOutline} ></IonIcon>
          <IonIcon slot='end' size='large' icon={heartOutline}></IonIcon>
        </IonItem>
        {/* </IonHeader> */}

        <IonText className='bali-content'>
          <h1>BALI</h1>
          <h6>Indonesia</h6>
          <h5>4.9<IonIcon color='warning' icon={starSharp}></IonIcon></h5>
        </IonText>

        <IonText>
          <IonGrid className='title-grid'>
            <IonRow>
              <IonCol>
                <h5>Hotel</h5>
              </IonCol>

              <IonCol>
                <h5>Foods</h5>
              </IonCol>

              <IonCol>
                <h5>Activities</h5>
              </IonCol>
            </IonRow>

            <IonRow className='image-grid'>
              <IonCol className='col-image'>
                <IonImg  src="../assets/images/pic1.png" alt='Image'></IonImg>
              </IonCol>

              <IonCol>
                <IonImg  className='col-image' src="../assets/images/pic2.png" alt='Image'></IonImg>
              </IonCol>
            </IonRow>
            </IonGrid>

            <IonGrid className='text-grid'>
            <IonRow>
              <IonText><h5 className='details-head'>Details</h5></IonText>
            </IonRow>
            <IonRow>
              <IonText><p className="ion-paragraph">Surrounded by rice fields, Villa Kayu Lama<br></br>offers a peaceful retreat in Ubud. Guests can<br></br>take a leisurely swim in the pri...<b>Read More</b></p></IonText>
            </IonRow>
          </IonGrid>
        </IonText>

        <div className="btn1">
        <IonButton className='continue-btn' color="secondary">Continue<IonIcon slot='end' icon={arrowForwardOutline}></IonIcon></IonButton>
        </div>
      </IonContent>
     
    </IonPage>
  );
};


export default page2;