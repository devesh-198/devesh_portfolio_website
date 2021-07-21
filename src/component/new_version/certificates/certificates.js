import React from 'react';

import classes from './certificates.module.css';

import DevGJavascriptCertificate from '../../../assets/old_version/Devesh-Gupta-JS-certificate.png';
import DevGReactCertificate from '../../../assets/old_version/Devesh-Gupta-React-certificate.png';
import DevGBusinessWritingCertificate from '../../../assets/new_version/DevGBusinessWritingCertificate.jpg';

const Certificates = () => {
    const workData = [
		{
			name: "JavaScript",
			image: DevGJavascriptCertificate,
			certificateUrl: 'https://www.udemy.com/certificate/UC-239651c9-6df6-4913-9e41-e27fa2187ef1/'
		},
		{
			name: "React.Js",
			image: DevGReactCertificate,
			certificateUrl: 'https://www.udemy.com/certificate/UC-211e16c2-959f-4d64-af42-9553f0af164e/'
		},
		{
			name: "Business Writing",
			image: DevGBusinessWritingCertificate,
			certificateUrl:'https://www.udemy.com/certificate/UC-cb481c55-4e77-448c-9a4e-5b8af02561f6/'
		}
	]

    return (
        <div className={classes.certificatesHeading}>
            <h2>Certificates</h2>
            <div className={classes.certificateStyle}>
                {workData.map(data => (
                    <div>
                        <img src={data.image} alt={data.name}/>
                        <p>{data.name}</p>
                        <a href={data.certificateUrl} target="_blank" rel="noreferrer">View Certificate</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificates;