import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import styles from '../../styles/ContactUs.module.css';

const ApplicationJobAr: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  const [loadingToastId, setLoadingToastId] = useState<string | null>(null);

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
    const loadingToastId = toast.loading('جاري الارسال...');

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

      toast.success('تم ارسال طلبكم بنجاح شكرا لك!', { id: loadingToastId });
      setFormData({
        title: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('هناك خطأ في الارسال برجاء مراجعة البيانات والمحاولة مرة اخرى.', { id: loadingToastId });
    }
  };

  return (
    <div className={` ${styles.mainApplication} apply-section`}>
      <Toaster />
      <div className="container">
        <div className={`row justify-content-center `}>
          <div className="col-md-8">
            <div className="text-center">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  <h2 className="title title--lg red-1-color">قدّم الآن</h2>
                  <p className="">
                    نحن دائمًا نبحث عن تعيين أشخاص موهوبين ذوي خبرة ذات صلة والذين يشاركون قيمنا. يرجى استخدام نموذج الطلب، أو بدلاً من ذلك إرسال سيرة ذاتية إلى المكتب الذي ترغب في الانضمام إليه.
                  </p>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      اللقب
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
                        <option value="">اختر ...</option>
                        <option>سيد</option>
                        <option>سيدة</option>
                        <option>آنسة</option>
                        <option>مدام</option>
                        <option>دكتور</option>
                        <option>أستاذ</option>
                      </select>
                    </div>
                  </div>
                  <div className="gfield col-md-6 form-group mt-4 text-start gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                    <label className="gfield_label gform-field-label">
                      الاسم الكامل
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
                      البريد الإلكتروني
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
                      الهاتف
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
                      خطاب التقديم
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
                    إرسال الرسالة
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

export default ApplicationJobAr;
