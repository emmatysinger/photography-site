import React, {useState} from 'react';
import './gallery.css';
import Gallery from '../components/Gallery'

//import images
import Img1 from '../img/graduation/EPT-1.jpg'
import Img2 from '../img/graduation/EPT-2.jpg'
import Img3 from '../img/graduation/EPT-3.jpg'
import Img4 from '../img/graduation/EPT-4.jpg'
import Img5 from '../img/graduation/EPT-5.jpg'
import Img6 from '../img/graduation/EPT-6.jpg'
import Img7 from '../img/graduation/EPT-7.jpg'
import Img8 from '../img/graduation/EPT-8.jpg'
import Img9 from '../img/graduation/EPT-9.jpg'
import Img10 from '../img/graduation/EPT-10.jpg'
import Img11 from '../img/graduation/EPT-11.jpg'
import Img12 from '../img/graduation/EPT-12.jpg'
import Img13 from '../img/graduation/EPT-13.jpg'
import Img14 from '../img/graduation/EPT-14.jpg'
import Img15 from '../img/graduation/EPT-15.jpg'
import Img16 from '../img/graduation/EPT-16.jpg'
import Img17 from '../img/graduation/EPT-17.jpg'
import Img18 from '../img/graduation/EPT-18.jpg'
import Img19 from '../img/graduation/EPT-19.jpg'
import Img20 from '../img/graduation/EPT-20.jpg'
import Img21 from '../img/graduation/EPT-21.jpg'
import Img22 from '../img/graduation/EPT-22.jpg'
import Img23 from '../img/graduation/EPT-23.jpg'
import Img24 from '../img/graduation/EPT-24.jpg'
import Img25 from '../img/graduation/EPT-25.jpg'
import Img26 from '../img/graduation/EPT-26.jpg'
import Img27 from '../img/graduation/EPT-27.jpg'
import Img28 from '../img/graduation/EPT-28.jpg'
import Img29 from '../img/graduation/EPT-29.jpg'
import Img30 from '../img/graduation/EPT-30.jpg'
import Img31 from '../img/graduation/EPT-31.jpg'
import Img32 from '../img/graduation/EPT-32.jpg'



const Graduation = () => {
    let data = [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
        Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
        Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30,
        Img31, Img32
    ]
    return (
        <Gallery data={data} />
    )
}

export default Graduation;


