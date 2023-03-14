import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonCardContent, IonPage, IonText, IonSearchbar, IonTabBar, IonToolbar, IonProgressBar, IonCard, IonThumbnail, IonButton, IonImg, IonRow, IonGrid, } from '@ionic/react';
import { notificationsOutline, calendar, people, add, remove } from 'ionicons/icons';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [count, setCount] = useState(0)
  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" width="50%" height="80%" />
          </IonAvatar>
          <IonText className='hello-txt'>
            <h4>Hello,</h4></IonText>
          <IonIcon slot="end" className="noti-icon" icon={notificationsOutline}></IonIcon>
        </IonItem>
      </IonHeader>

      <IonContent fullscreen color="tertiary">
        <IonItem lines="none" className='search-cont' color="tertiary">
          <IonSearchbar color="light" placeholder="Location"></IonSearchbar>
        </IonItem>

        <IonCard className='ion-card'>
          <IonCardContent className='ion-cardcont'> <IonIcon slot="start" className='icon-calender' icon={calendar}></IonIcon>  July 08 - July 15 </IonCardContent>
        </IonCard>

        <IonCard className='ion-card ion-card-second'>
          <IonCardContent className='ion-cardcont'> <IonIcon slot="start" className='icon-people' icon={people}></IonIcon>   {count} Guest
            <IonButton className='plus-btn' color="medium" onClick={() => setCount(count + 1)}><IonIcon className='icon-remove' size='small' icon={add}></IonIcon></IonButton>
            <IonButton className='minus-btn' color="medium" onClick={() => setCount(count - 1)}><IonIcon className='icon-add' size='small' icon={remove}></IonIcon></IonButton>
          </IonCardContent>
        </IonCard>

        <div className='ion-btn'>
          <IonButton className='search-btn' color="secondary" >Search</IonButton>
        </div>

        <IonItem className='ion-img-cont' lines="none" color="success">
          <IonGrid>
            <IonRow>
              <IonImg className='ion-img' src="../assets/images/Seaimage.png" alt='Image'></IonImg>
            </IonRow>
            <IonRow>
              <IonText><h5 className='ion-head'>Details</h5></IonText>
            </IonRow>
            <IonRow>
              <IonText><p className="ion-para">There is no other place like Bali in this world.<br></br> A magical mix of culture, people, nature,<br></br> activities, weather, culinary delights, nightlife<br></br> and many other interesting things that can<br></br> make your stay unforgettable.</p></IonText>
            </IonRow>
            
          </IonGrid>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Home;
