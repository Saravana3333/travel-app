import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonTitle, IonCheckbox, IonIcon, IonList, IonText, IonGrid, IonRow, IonCol, IonImg, IonCardHeader, IonChip } from '@ionic/react';
import { arrowBackOutline, shareSocialOutline, heartOutline, starSharp, arrowForwardOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './page2.css';



const Page2: React.FC = () => {
  const history = useHistory()
  const navigate = () => {
    history.push('./page1')
  }

  const [type, setType] = useState('Hotel');

  console.log(type)
  return (
    <IonPage>
      <IonContent className='background-img'>

        {/* <IonHeader className='ion-header' > */}
        <IonItem lines='none' className='ion-icon' color="transparent">
          <IonIcon slot='start' size='large' onClick={navigate} icon={arrowBackOutline} ></IonIcon>
          <IonIcon slot='end' size='large' icon={shareSocialOutline} ></IonIcon>
          <IonIcon slot='end' size='large' icon={heartOutline}></IonIcon>
        </IonItem>
        {/* </IonHeader> */}

        <IonText className='bali-content'>
          <h1>BALI</h1>
          <h6>Indonesia</h6>
          <p>4.9<IonIcon color='warning' icon={starSharp}></IonIcon></p>
        </IonText>



        <IonText>
          <IonGrid className='title-grid'>
            <IonRow className='ion-align-items-center'>
              <IonCol onClick={() => setType('Hotel')}>
                <h5 className={(type === "Hotel" ? 'text-selected' : 'col-text')}>Hotel</h5>
              </IonCol>

              <IonCol onClick={() => setType('Foods')}>
                <h5 className={(type === "Foods" ? 'text-selected' : 'col-text')}>Foods</h5>
              </IonCol>

              <IonCol onClick={() => setType('Activities')}>
                <h5 className={(type === "Activities" ? 'text-selected' : 'col-text')}>Activities</h5>
              </IonCol>
            </IonRow>

            {type === "Hotel" ? (
              <><IonRow className='image-grid'>
                <IonCol className='col-image'>
                  <Link to="/page3"><IonImg src="../assets/images/pic1.png" alt='Image'></IonImg></Link>
                </IonCol>

                <IonCol className='col-image'>
                  <IonImg src="../assets/images/pic2.png" alt='Image'></IonImg>
                </IonCol>
              </IonRow>

              <IonGrid className='text-grid'>
                <IonRow>
                  <IonText><h5 className='details-head'>Details</h5></IonText>
                </IonRow><IonRow>
                  <IonText><p className="ion-paragraph">Surrounded by rice fields, Villa Kayu Lama offers a peaceful retreat in Ubud. Guests can take a leisurely swim in the pri...<span color="dark"><b>Read More</b></span></p></IonText>
                </IonRow>
                </IonGrid></>

            ) : (type === "Foods") ? (
              <><IonRow className='image-grid'>
                <IonCol className='col-image'>
                  <IonImg src="../assets/images/food1.png" alt='Image'></IonImg>
                </IonCol>

                <IonCol className='col-image'>
                  <IonImg src="../assets/images/food2.png" alt='Image'></IonImg>
                </IonCol>
              </IonRow>

              <IonGrid className='text-grid'>
                <IonRow>
                  <IonText><h5 className='details-head'>Details</h5></IonText>
                </IonRow>
                <IonRow>
                  <IonText><p className="ion-paragraph">There are so many foods you must eat in Bali but this article might be too long if we list all of it. This guide includes some tra..<span color="dark"><b>Read More</b></span></p></IonText>
                </IonRow>
                </IonGrid></>
                
            ) : (type === "Activities") ? (
              <><IonRow className='image-grid'>
                <IonCol className='col-image'>
                  <IonImg src="../assets/images/activities1.png" alt='Image'></IonImg>
                </IonCol>

                <IonCol className='col-image'>
                  <IonImg src="../assets/images/activities2.png" alt='Image'></IonImg>
                </IonCol>
              </IonRow>

              <IonGrid className='text-grid'>
                <IonRow>
                  <IonText><h5 className='details-head'>Details</h5></IonText>
                </IonRow>
                <IonRow>
                  <IonText><p className="ion-paragraph">Discover 81 cool things to do in Bali that you don’t want to miss! From stunning diving spots to amazing beachclubs...<span color="dark"><b>Read More</b></span></p></IonText>
                </IonRow>
                </IonGrid></>
            ) : null}
          </IonGrid>

        </IonText>

        <p className="ion-text-center">
          <IonButton className='continue-btn' onClick={() => {
            history.push('/page3')
          }}>Continue<IonIcon slot='end' icon={arrowForwardOutline}></IonIcon></IonButton>
        </p>
    
      </IonContent>
    </IonPage>
  );
};


export default Page2;