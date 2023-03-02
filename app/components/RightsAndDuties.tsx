import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import styles from '../styles/RightsAndDuties.module.css'
import Image from 'next/image'
import dutes from '../public/imagess/duties.png'
import { GiCheckMark } from 'react-icons/gi'
import { dir } from 'console'

const RightsAndDuties = () => {
  return (
    <>
     <section className={` `}>
        <div className={`text-center ${styles.titleWord}`}>
            <h6 className="text-white fw-semibold mb-4" data-trans="routeCASCORightsAndDuties">{`Home > About CASCO > Rights And Duties`}</h6>
            <h2 className={`text-white fw-bold  `} data-trans="CASCORightsAndDuties">{`CASCO’s Rights And Duties`}</h2>
        </div>
        <div className="row mx-0 d-flex justify-content-around align-items-center">
            <div className="col-lg-2"></div>
            <div className={`card-body col-xl-3 col-lg-3 col-md-6 col-sm-12`}>
              <span className='me-lg-5' data-trans="CASCOSRIGHTSANDDUTIES">{`CASCO'S RIGHTS AND DUTIES`}</span>
                  <h4 className='fw-bold me-lg-5 mt-2' data-trans="CASCOSRights">{`CASCO'S Rights`}</h4>
                  </div>
                  <div className={`card-body col-xl-3 col-lg-3 col-md-6 col-sm-12`}></div>
                  </div>
                  <div className="col-lg-2"></div>
       <div className="row mx-0 d-flex justify-content-around align-items-center">
            <div className="col-lg-2"></div>
            <div className={`card-body col-xl-6 col-lg-6 col-md-12 col-sm-12 p-4`}>
                    <ul className={`${styles.ulClass}`}>
                        <li className={`${styles.itemCheckTage} d-flex`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs1'>{`GAC has the right to decline, withdraw, suspend or even reduce scope of its accredited CAB which doesn’t comply with the requirements of the accreditation criteria including applicable laws/regulation, or when it is found have falsified information or documents and when there’s clear evidence of its fraudulent behavior.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs2'>{`To not accept the application from CAB that doesn’t provide required information & documents, and doesn’t cooperate to a level necessary to meet the timelines, or when found to be scam or fraudulent.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex `}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs3'>{`To change type of assessment, frequency of assessment and conduct unannounced assessment as result of previous assessment outcome, due to complaint or appeals or sourced information which impacts the image of GAC or affects integrity and competence of the CAB.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span data-trans='ritghs4' className='me-2 ms-2'>{`To assess the management system of the CAB and require any document and access to location and facilities in relation to the scope of accreditation during the accreditation cycle of the CAB.`}</span>
                        </li>
                    </ul>          
            </div>
            <div className="col-lg-2"></div>
        </div>
        <div className={`row mx-0 d-flex justify-content-around align-items-center ${styles.ctA}`}>
            <div className="col-lg-2"></div>
            <div className={`card-body col-xl-3 col-lg-3 col-md-6 col-sm-12 `}>
              <Image src={dutes} className={``} alt="dutes image"/>
              </div>
              <div className={`card-body col-xl-3 col-lg-3 col-md-6 col-sm-12 ${styles.dutesList}`}>
              <h4 className='fw-bold  text-white me-5' data-trans='CASCOsduties'>{`CASCO’s duties`}</h4>
              <ul className='list-unstyled mt-4'>
                        <li className={`${styles.itemCheckTage} d-flex`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span className='me-2 ms-2 text-white' data-trans='duiets1'>{`To timely plan and conduct due assessments for the CABs to determine its competence`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span  className='me-2 ms-2 text-white' data-trans='duiets2'>{`To ensure confidentiality of CAB’s information and their documents unless required by the law/regulation to disclose it in a way required.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span  className='me-2 ms-2 text-white' data-trans='duiets3'>{`GAC will make publicly available information about the current status of the accreditations that it has granted to the CABs, this information is updated regularly and in line with ISO/IEC 17011 requirements.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span  className='me-2 ms-2 text-white' data-trans='duiets4'>{`To ensure impartiality of its services`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span  className='me-2 ms-2 text-white' data-trans='duiets5'>{`To inform its accredited CABs about any changes in the accreditation requirements and timelines as applicable, to ensure the implementation of changes it could be covered through next due assessment or by asking CABs to provide some immediate evidences of implementation.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                            <span  className='me-2 ms-2 text-white' data-trans='duiets6'>{`To provide information about suitable ways to obtain tractability of measurement results in relation to the scope for which accreditation is provided. This is detailed in the Technical Note TN 2.0.`}</span>
                        </li>
                    </ul>  
              </div>
              <div className="col-lg-2"></div>
        </div>
     </section>
    </>
  )
}

export default RightsAndDuties