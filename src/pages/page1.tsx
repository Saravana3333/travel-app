import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonTitle, IonCheckbox, IonIcon, IonList, IonText } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './page1.css';



const Page1: React.FC = () => {

  const history = useHistory()

  const [contactInfo, setContactInfo] = useState({
    name: "",
  });


  return (
    <IonPage>
      <IonContent className='ion-contact-info' color="tertiary">
        <IonList className='list'>
          <IonItem className='inputbox-submit' color="dark" fill="outline">
            <IonLabel position="floating">Name </IonLabel>
            <IonInput
              className='ion-in-box'
              type="text"
              name="name"
              placeholder="Enter your Name..."
              value={contactInfo.name}
            />
          </IonItem>
        </IonList>

        <div className="ion-btn">
          <IonButton className="ion-btn-color" color="secondary" >Submit</IonButton>
        </div>
      </IonContent>



    </IonPage>
  );
};


export default Page1;