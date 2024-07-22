import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from '../../styles/ContactUs.module.css';
import toast from 'react-hot-toast';

const ApplicationJobEn: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      setFormData({
        ...formData,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingToastId = toast.loading('Submitting...');

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        const value = (formData as any)[key];
        if (value) {
          formDataObj.append(key, value);
        }
      });

      await axios.post('/api/sendJobApplicationEmail', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Your message has been sent. Thank you!', { id: loadingToastId });
      setFormData({
        title: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('There was an error sending your message. Please try again.', { id: loadingToastId });
    }
  };


  return (
    <div className={` ${styles.mainApplication} apply-section`}>
      <div className="container">
        <div className={`row justify-content-center `}>
          <div className="col-md-8">
            <div className="text-center">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  <h2 className="title title--lg red-1-color">Apply now</h2>
                  <p className="">
                    We are always looking to hire talented people with relevant experience who share our values. Please use the application form, or alternatively email a CV to the office you are interested in joining.
                  </p>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      TITLE
                      <span className="gfield_required">
                        <span className="gfield_required_asterisk">*</span>
                      </span>
                    </label>
                    <div className="ginput_container ginput_container_select">
                      <select
                        name="title"
                        className={`form-select ${styles.formControl}`}
                        value={formData.title}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Please choose ...</option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                        <option>Rev.</option>
                      </select>
                    </div>
                  </div>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      FULL NAME
                      <span className="gfield_required">
                        <span className="gfield_required_asterisk">*</span>
                      </span>
                    </label>
                    <div className="ginput_container ginput_container_text">
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${styles.formControl}`}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      EMAIL
                      <span className="gfield_required">
                        <span className="gfield_required_asterisk">*</span>
                      </span>
                    </label>
                    <div className="ginput_container ginput_container_email">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${styles.formControl}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      PHONE
                      <span className="gfield_required">
                        <span className="gfield_required_asterisk">*</span>
                      </span>
                    </label>
                    <div className="ginput_container ginput_container_text">
                      <input
                        type="text"
                        name="phone"
                        className={`form-control ${styles.formControl}`}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="gfield form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      COVER LETTER
                      <span className="gfield_required">
                        <span className="gfield_required_asterisk">*</span>
                      </span>
                    </label>
                    <div className="ginput_container ginput_container_textarea">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className={`myInfo p-3 rounded fs-6 ${styles.btnClass}`}
                    type="submit"

                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationJobEn;
