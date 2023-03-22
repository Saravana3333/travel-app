import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonCardContent, IonPage, IonText, IonSearchbar, IonTabBar, IonToolbar, IonProgressBar, IonCard, IonThumbnail, IonButton, IonImg, IonRow, IonGrid, IonRefresher, IonRefresherContent, RefresherEventDetail, } from '@ionic/react';
import { notificationsOutline, calendarClearOutline, people, add, remove } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './page1.css';

const Page1: React.FC = () => {

  const history = useHistory()
  
  const [count, setCount] = useState(0)
 
  // const location = useLocation<{name:string}>()
  const name =JSON.parse(localStorage.getItem('myObject') as any)
  // const name = location?.state?.['name']
  
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" width="50%" height="80%" />
          </IonAvatar>
          <IonText className='hello-txt'>
            <h4>Hello,{name}</h4></IonText>
          <IonIcon slot="end" className="noti-icon" icon={notificationsOutline}></IonIcon>
        </IonItem>
      </IonHeader>
      
      <IonContent fullscreen color="tertiary">
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem lines="none" className='search-cont' color="tertiary">
          <IonSearchbar placeholder="Location"></IonSearchbar>
        </IonItem>

        <IonCard className='ion-card'>
          <IonCardContent className='ion-cardcont'> <IonIcon slot="start" className='icon-calender' icon={calendarClearOutline}></IonIcon>  July 08 - July 15 </IonCardContent>
        </IonCard>

        <IonCard className='ion-card ion-card-second'>
          <IonCardContent className='ion-cardcont'> <IonIcon slot="start" className='icon-people' icon={people}></IonIcon>   {count} Guest
            <IonButton className='plus-btn'  onClick={() => setCount(count + 1)}><IonIcon className='icon-remove' size='small' icon={add}></IonIcon></IonButton>
            <IonButton className='minus-btn' onClick={() => setCount(count - 1)}><IonIcon className='icon-add' size='small' icon={remove}></IonIcon></IonButton>
          </IonCardContent>
        </IonCard>

        <p className='ion-text-center'>
          <IonButton className='search-btn' onClick={() => {
                history.push('/page2')}}>Search</IonButton>
        </p>

        <IonItem className='ion-img-cont' lines="none" color="success">
          <IonGrid>
            <IonRow>
              <IonImg className='ion-img' src="../assets/images/Seaimage.png" alt='Image'></IonImg>
            </IonRow>
            <IonRow>
              <IonText><h5 className='ion-details-text'>Details</h5></IonText>
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
export default Page1;
