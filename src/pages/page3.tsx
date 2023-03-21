import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonItemDivider, IonCheckbox, IonIcon, IonList, IonText, IonGrid, IonRow, IonCol, IonImg, IonCardHeader } from '@ionic/react';
import { arrowBackOutline, calendarClearOutline, menuSharp, starSharp, arrowForwardOutline, locationSharp } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './page3.css';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';



const Page3: React.FC = () => {

    const history = useHistory()
    const navigate = () => {
        history.push('./page2')
    }
    return (
        <IonPage>
            <IonHeader className='ion-head'>
                <IonItem className='title-item' lines='none' color='medium'>
                    <IonIcon slot='start' size='large' onClick={navigate} icon={arrowBackOutline}></IonIcon><IonText className='booking-text'>Booking</IonText>
                    <IonIcon slot='end' icon={calendarClearOutline} ></IonIcon>
                    <IonIcon slot='end' size='large' icon={menuSharp}></IonIcon>
                </IonItem>
            </IonHeader>

            <IonContent>

            <Swiper  modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
                <IonImg className='background-image' src="../assets/images/background3.png" alt='Image'></IonImg>

                <IonText>
                    <IonGrid>
                        <div className='col-line'>
                            <IonRow>
                                <IonCol><IonText><h3 className='col-text1'>Villa Kaya Lama </h3></IonText></IonCol>
                                <IonCol><IonText className='rating-text'><IonIcon color='warning' icon={starSharp}></IonIcon>4.3</IonText></IonCol>
                            </IonRow>
                            <IonText>
                                <h5 className='col-text2'><IonIcon slot='start' color='warning' size="medium" icon={locationSharp}></IonIcon>Ubud, Indonesia</h5>
                            </IonText>
                        </div>
                    </IonGrid>
                </IonText>

                <IonItem>
                    <IonButton className='details-btn' color="secondary">Details</IonButton>
                    <IonButton className='reviews-btn reviews-btn1' color="light">Reviews</IonButton>
                </IonItem>

                <IonText><p className='ion-paragraph para-align'>Surrounded by rice fields, Villa Kayu Lama<br></br>offers a peaceful retreat in Ubud. Guests can<br></br>take a leisurely swim in the private<br></br>pools or enjoy relaxing in-villa massages.<br></br> Free shuttles to Ubud centre is available<br></br> thrice a day based on schedule.</p></IonText>
                <IonText><h6 className='facilities-head'>FACILITIES</h6></IonText>

                <IonGrid>
                    <IonRow>
                        <IonCol className='ions-image'>
                            <IonImg src="../assets/images/image1.png" alt='Image'></IonImg>
                            <IonText className='ion-con-name ion-text-center'>Outdoor Pool</IonText>
                        </IonCol>

                        <IonCol className='ions-image'>
                            <IonImg src="../assets/images/image2.png" alt='Image'></IonImg>
                            <IonText className='ion-con-name'>1 Bathtub</IonText>
                        </IonCol>

                        <IonCol className='ions-image'>
                            <IonImg src="../assets/images/image3.png" alt='Image'></IonImg>
                            <IonText className='ion-con-name'>Free Wi-Fi</IonText>
                        </IonCol>

                        <IonCol className='ions-image'>
                            <IonImg src="../assets/images/image4.png" alt='Image'></IonImg>
                            <IonText className='ion-con-name'>Free Breakfast</IonText>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage >
    );
};


export default Page3;