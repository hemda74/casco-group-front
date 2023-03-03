import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/ServicesPage.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
const ServicesPage = () => {
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4">{`Home > Services`}</h6>
        <h2 className={`text-white fw-bold mb-5 `}>Services</h2>
    </div>
    <div className={`row gy-5  container justify-content-center align-items-center m-auto ${styles.formConatiner}`}>
    <div className="card_accreditation d-flex ">
                                    <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                                        <Image className={`${styles.accreditationThumbnail2}`}src={servicesimage} width={350} height={350} alt=""/>
                                    </div>
                                    <div className={`${styles.accreditationThumbnail}`}>
                                        <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                                        <p className='mb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017
                                                  General requirements for the competence of testing and calibration laboratories. </p>
                                          <Link href="/login" target="_blank" className='mt-2'><span className={`${styles.btnContainer}`}>Apply now</span></Link>
                                                                            </div>
                                </div>
                                <div className="card_accreditation d-flex ">    
                                    <div className={`${styles.accreditationThumbnail} `}>
                                        <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                                        <p className='mb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017
                                                  General requirements for the competence of testing and calibration laboratories. </p>
                                          <Link href="/login" target="_blank" className='mt-2'><span className={`${styles.btnContainer}`}>Apply now</span></Link>
                                                                            </div>
                                                                            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                                        <Image className={`${styles.accreditationThumbnail2}`}src={servicesimage} width={350} height={350} alt=""/>
                                    </div>
                                </div>
                                <div className="card_accreditation d-flex ">
                                <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                                        <Image className={`${styles.accreditationThumbnail2}`}src={servicesimage} width={350} height={350} alt=""/>
                                    </div>
                                    <div className={`${styles.accreditationThumbnail}`}>
                                        <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                                        <p className='mb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017
                                                  General requirements for the competence of testing and calibration laboratories. </p>
                                          <Link href="/login" target="_blank" className='mt-2'><span className={`${styles.btnContainer}`}>Apply now</span></Link>
                                                                            </div>
                                </div>
                                <div className="card_accreditation d-flex ">    
                                    <div className={`${styles.accreditationThumbnail}`}>
                                        <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                                        <p className='mb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017
                                                  General requirements for the competence of testing and calibration laboratories. </p>
                                          <Link href="/login" target="_blank" className='mt-2'><span className={`${styles.btnContainer}`}>Apply now</span></Link>
                                                                            </div>
                                                                            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                                        <Image className={`${styles.accreditationThumbnail2}`}src={servicesimage} width={350} height={350} alt=""/>
                                    </div>
                                </div>
                               
                              
                                   
                                  
                                

   </div>
</>
    )
}

export default ServicesPage