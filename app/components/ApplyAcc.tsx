import React from 'react'
import styles from '../styles/ApplyAcc.module.css'
// Apply Accrediation Component
 const ApplyAcc = () => {
  return (
    <>
        <div className={`${styles.mainContanier}`}>
            <span className='fw-bold fs-3 text-white' data-trans="Readytobeaccredited">
            Ready to be Digital Transformation with iCASCO?
            </span>
            <span className='fs-6 mt-3 fw-semibold text-white text-center' data-trans="CASCOGroupprovidesaccreditation">
            CASCO provides an iCASCO ERP SaaS system  for ISO 17000 Family that helps all Certification Bodies (CBs) to manage the certification process flow easily and efficiently COC, SASO, SABER, NAFSA and SFDA. 
            </span>
            <button className={`mt-4 rounded ${styles.SearchButton}`}>
                <span className='fs-6 fw-bold' data-trans="APPLYFORACCREDITATION">
                    APPLY NOW
                </span>
            </button>
        </div>
    </>
  )
}
export default ApplyAcc;
