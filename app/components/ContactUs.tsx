import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import styles from '../styles/ContactUs.module.css';
import Link from 'next/link';
import { FaFax, FaMapMarkerAlt } from 'react-icons/fa';
import getBillboard from '../actions/get-billboard';
const ContactUs = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className={`text-center ${styles.titleWord}`}>
          <div className={`container mb-4`}>
            <Link
              href={'/'}
              className="text-white fw-semibold mb-4"
              data-trans="homepageurl">
              {`Home`}
            </Link>
            <Link
              href={'/contact-us'}
              className="text-white fw-semibold mb-4"
              data-trans="ContactUsHeadLink">
              {` > Contact Us`}
            </Link>
          </div>
          <h2 className="text-white fw-bold mb-5" data-trans="ContactUs">
            Contact Us
          </h2>
        </div>
        {/* adresses data in contact us  */}
        <div className="container col-xl-10 col-lg-12 col-md-12 mb-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 p-3 ">
              <div className={`${styles.firstIcons}`}>
                <p
                  className={`fs-4 mb-4 ${styles.postTitle}`}
                  data-trans="EgyptBranch">
                  Egypt Branch
                </p>
                <p className={`${styles.iconsColor}`}>
                  <BsFillTelephoneFill size={33} />
                </p>
                <p className="" data-trans="EgyptBranchPhone">
                  +20 23963913
                </p>
                <p className={`${styles.iconsColor}`}>
                  <FiMail size={30} />
                </p>
                <p className="mt-0 me-2">egy@casco.com.eg</p>
                <div className={``}>
                  {/* <div className=" col-sm-12">
                    <p className={`${styles.iconsColor}`}>
                      <FaFax size={30} />
                    </p>
                    <p className="">+20 112 1900 466</p>
                  </div> */}
                  <div className="col-sm-12">
                    <p className={`${styles.iconsColor2}`}>
                      <FaMapMarkerAlt size={35} />
                    </p>
                    <p className="" data-trans="egyptadress">
                      61 Al Falki, Bab Al Louq, Abdeen, Cairo Governorate 11513,
                      Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3 ">
              <div className={`${styles.firstIcons}`}>
                <p
                  className={`fs-4 mb-4 ${styles.postTitle}`}
                  data-trans="UAEBranch">
                  UAE Branch
                </p>
                <p className={`${styles.iconsColor}`}>
                  <BsFillTelephoneFill size={33} />
                </p>
                <p className="" data-trans="UAEBranchPhone">
                  +971 52 526 1012
                </p>
                <p className={`${styles.iconsColor}`}>
                  <FiMail size={30} />
                </p>
                <p className="mt-0 me-2">me@cascotec.com</p>
                <div className={``}>
                  {/* <div className=" col-sm-12">
                    <p className={`${styles.iconsColor}`}>
                      <FaFax size={30} />
                    </p>
                    <p className="">+20 112 1900 466</p>
                  </div> */}
                  <div className="col-sm-12">
                    <p className={`${styles.iconsColor2}`}>
                      <FaMapMarkerAlt size={35} />
                    </p>
                    <p className="" data-trans="uaeadress"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3">
              <div className={`${styles.firstIcons}`}>
                <p
                  className={`fs-4 mb-4 ${styles.postTitle}`}
                  data-trans="KSABranch">
                  KSA Branch
                </p>
                <p className={`${styles.iconsColor}`}>
                  <BsFillTelephoneFill size={33} />
                </p>
                <p className="" data-trans="KSABranchPhone">
                  +966 50 195 1017
                </p>
                <p className={`${styles.iconsColor}`}>
                  <FiMail size={30} />
                </p>
                <p className="mt-0 me-2">me@cascotec.com</p>
                <div className={``}>
                  <div className=" col-sm-12">
                    <p className={`${styles.iconsColor2}`}>
                      <FaMapMarkerAlt size={35} />
                    </p>
                    <p className="" data-trans="ksaAdress">
                      KSA - Riyadh - Mosa Bin Nasser St. Borj Alnamer - office
                      No: 506
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* maps in contact Us  */}
        <div className="container col-xl-10 col-lg-12 col-md-12 mb-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 p-3">
              <div className={`${styles.mapContact}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.682897233059!2d31.2425979202108!3d30.04595398197049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458415e7080b205%3A0x60cf5d8571c8083b!2zQ0FTQ08gRm9yIEFzc2Vzc21lbnQgU2VydmljZXMgTC5MLkMuINmD2KfYs9mD2Ygg2YTYrtiv2YXYp9iqINin2YTYqtmC2YrZitmF!5e0!3m2!1sar!2seg!4v1681100283875!5m2!1sar!2seg"></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3">
              <div className={`${styles.mapContact}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.951759199128!2d55.2707828!3d25.204849300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43441ac9738b%3A0xa1e10db4aea8c490!2sCASCO%20Middle%20East%20L.L.C!5e0!3m2!1sen!2seg!4v1697741716826!5m2!1sen!2seg"></iframe>{' '}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3">
              <div className={`${styles.mapContact}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6851579025974!2d46.6797129!3d24.703347500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03aac9be175d%3A0x785d35fc020f008!2zbXV0aG1lciBjb25zdWx0YW50INmF2KvZhdixINmE2YTYp9iz2KrYtNin2LHYp9iq!5e0!3m2!1sen!2ssa!4v1681100567164!5m2!1sen!2ssa"></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* form contact Us */}
        <div
          className={` container ${styles.formConatiner} col-xl-10 col-lg-12 col-md-12 `}>
          {/* <div className={`col-md-6 form-group mt-3 mt-4 ${styles.formGroup}`}>
                                <input type="text" name="subject" data-trans="Subject" className={`form-control ${styles.formControl}`} id="subject" placeholder="Subject" required/>
                            </div> 
                        </div>
                      <div className={`form-group mt-4 ${styles.formGroup}`}>
                            <textarea className="form-control" name="message" placeholder="Message" rows={5} required></textarea>
                      </div>
                      <div className="my-3">
                            <div className={`loading ${styles.loadingMassage}`}>Loading</div>
                            <div className={`error-message ${styles.errorMassage}`}></div>
                            <div className={`sent-message ${styles.sentMassage}`}>Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center">
                          <button className={`myInfo p-3 rounded fs-6 ${styles.btnClass}`} type="submit" data-trans="sendmessage">Send Message</button>
                      </div>
                    </form>
                </div>
            </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
