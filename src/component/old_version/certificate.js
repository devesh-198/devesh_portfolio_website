import React from 'react';

import classes from './certificate.module.css';
import DevGJavascriptCertificate from '../../assets/old_version/Devesh-Gupta-JS-certificate.png';
import DevGReactCertificate from '../../assets/old_version/Devesh-Gupta-React-certificate.png';

const crtEl = React.createElement;

const certificates = (
    crtEl('div', {className: classes.certify}, 
        crtEl('h2', null, `Certificates`),
        crtEl('div', {className: classes.image},
            crtEl('a', {href: 'https://www.udemy.com/certificate/UC-239651c9-6df6-4913-9e41-e27fa2187ef1/'}, 
                crtEl('img', {src: DevGJavascriptCertificate, alt: `Devesh Gupta Javascript Certificate`, title: `Devesh Gupta Javascript Certificate`}, null),
            ),
            crtEl('a', {href: 'https://www.udemy.com/certificate/UC-211e16c2-959f-4d64-af42-9553f0af164e/'}, 
                crtEl('img', {src: DevGReactCertificate, alt: `Devesh Gupta React Certificate`, title: `Devesh Gupta React Certificate`}, null)
            )
        )
    )
)

export default certificates;