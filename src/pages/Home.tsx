import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonTitle, IonCheckbox, IonIcon, IonList, IonText } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Home.css';

const Home: React.FC = () => {

  const history = useHistory()

  // const [contactInfo, setContactInfo] = useState({
  //   name: "",
  // });
  // const [name, setName] = useState('');
  // const handleChange = (e:any) => {
  //   setName(e.target.value);
  return (
    <IonPage>
      <IonContent className='ion-contact-info' color="tertiary">
          <IonItem className='inputbox-submit' color="dark" fill='outline' >
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              className='ion-in-box'
              type="text"
              name="name"
              placeholder="Enter your Name..."
            ></IonInput>
          </IonItem>

              <p  className='ion-text-center'>
          <IonButton className="ion-btn-color" onClick={()=>{history.push("/page1")}}>Submit</IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;