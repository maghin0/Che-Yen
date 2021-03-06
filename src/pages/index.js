import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

import chejungle from '../images/chejungle.jpg';
import chejungle1 from '../images/chejungle1.jpg';
import chejungle2 from '../images/chejungle2.jpg';
import chejungle3 from '../images/chejungle3.jpg';
import chemotor from '../images/chemotor.jpg';
import chemotor01 from '../images/chemotor01.jpg';
import chemotor02 from '../images/chemotor02.jpg';
import chemotor03 from '../images/chemotor03.jpg';
const IndexPage = () => (
  <div>
    <Layout />
    <Vshoot img={chejungle} number="01" shoot={chejungle2} />
    <Footer />
  </div>
);
export default IndexPage;
