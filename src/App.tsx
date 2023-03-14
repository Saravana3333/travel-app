import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { shieldHalfOutline, logoUsd, logoMastodon, logoEuro, search, homeOutline, locationOutline, personOutline } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/page1">
          <Page1 />
        </Route>

        <Route exact path="/page2">
          <Page2 />
        </Route>
        
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

      </IonRouterOutlet>
        <IonTabBar slot="bottom" color="medium">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton tab="page1" href="/page1">
            <IonIcon icon={search} />
          </IonTabButton> 

          <IonTabButton tab="page2" href="/page2">
            <IonIcon icon={locationOutline} />
          </IonTabButton>

          <IonTabButton>
            <IonIcon icon={personOutline} />
            </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
