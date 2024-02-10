// // import Link from 'next/link'
// // import React from 'react'
// // import styles from '../styles/Documents.module.css'
// // import {CiFilter} from 'react-icons/ci'
// // import {VscFilePdf} from 'react-icons/vsc'
// // import {SlReload} from 'react-icons/sl'
// // import DocumentsModal from './DocumentsModal'
// // import DocumentCard from './DocumentCard'
// // type Props = {
// //   [key: string]: any;
// // };
// // type Document_Data = {
// //   [key: string]: any;
// // };
// // const Documents = (props: Props) => {
// //   return (
// // <>
// //     <div className={`text-center ${styles.titleWord}`}>
// //         <div className={`container mb-4`}>
// //             <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
// //             <Link href={"/documents"}><a className="text-white fw-semibold mb-4">{` > Documents`}</a></Link>
// //         </div>
// //         <h2 className={`text-white fw-bold mb-5 `}>Documents</h2>
// //     </div>
// //     <div className={` container pe-4 ps-4`}>
// //         <div className="row justify-content-center">
// //             <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
// //                 <div className={`col-lg-12 ${styles.contactCard}`}>
// //                     <div className=" d-flex justify-content-between">
// //                         <small className='mt-2 text-black-50'>25 Document</small>
// //                         <button className={`rounded mb-3 ${styles.filterButton}`} type="submit"><small>Filter</small><CiFilter size={15}/></button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //     <div className="container">
// //         <div className="row justify-content-center">
// //             <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
// //                 <div className="accordion" id="accordionPanelsStayOpenExample">
// //                   {/* passing props to inner card for each document */}
// //                 {props.ducoments.map
// //                   (
// //                     (document_Data:Document_Data,index:number)=>(
// //                       <DocumentCard
// //                       key={index}
// //                       document_name={document_Data.document_name}
// //                       document_pdf={document_Data.document_pdf}
// //                       document_id={document_Data.document_id}
// //                       document_issued_date={document_Data.document_issued_date}
// //                       document_category={document_Data.document_category}
// //                       document_sub_category={document_Data.document_sub_category}
// //                       document_accrediation_type={document_Data.document_accrediation_type}
// //                       document_changelog={document_Data.document_changelog}
// //                       document_for_Code={document_Data.document_for_Code}
// //                       document_version={document_Data.document_version}
// //                       />
// //                     )
// //                   )
// //                 }
// //                 </div>
// //             </div>
// //         </div>
// //     </div>

// // </>
// //   )
// // }
// // export default Documents;
// import Link from 'next/link'
// import React from 'react'
// import styles from '../styles/Documents.module.css'
// import {CiFilter} from 'react-icons/ci'
// import {VscFilePdf} from 'react-icons/vsc'
// import {SlReload} from 'react-icons/sl'
// import DocumentsModal from './DocumentsModal'
// import DocumentCard from './DocumentCard'
// type Props = {
//   [key: string]: any;
// };
// type Document_Data = {
//   [key: string]: any;
// };
// const Documents = (props: Props) => {
//   return (
// <>
//     <div className={`text-center ${styles.titleWord}`}>
//         <div className={`container mb-4`}>
//             <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
//             <Link href={"/documents"}><a className="text-white fw-semibold mb-4">{` > Documents`}</a></Link>
//         </div>
//         <h2 className={`text-white fw-bold mb-5 `}>Documents</h2>
//     </div>
//     <div className={` container pe-4 ps-4`}>
//         <div className="row justify-content-center">
//             <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
//                 <div className={`col-lg-12 ${styles.contactCard}`}>
//                     <div className=" d-flex justify-content-between">
//                         <small className='mt-2 text-black-50'>25 Document</small>
//                         <button className={`rounded mb-3 ${styles.filterButton}`} type="submit"><small>Filter</small><CiFilter size={15}/></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="container">
//         <div className="row justify-content-center">
//             <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
//                 <div className="accordion" id="accordionPanelsStayOpenExample">
//                   {/* passing props to inner card for each document */}
//                 {props.ducoments.map
//                   (
//                     (document_Data:Document_Data,index:number)=>(
//                       <DocumentCard
//                       key={index}
//                       document_name={document_Data.document_name}
//                       document_pdf={document_Data.document_pdf}
//                       document_id={document_Data.document_id}
//                       document_issued_date={document_Data.document_issued_date}
//                       document_category={document_Data.document_category}
//                       document_sub_category={document_Data.document_sub_category}
//                       document_accrediation_type={document_Data.document_accrediation_type}
//                       document_changelog={document_Data.document_changelog}
//                       document_for_Code={document_Data.document_for_Code}
//                       document_version={document_Data.document_version}
//                       />
//                     )
//                   )
//                 }
//                 </div>
//             </div>
//         </div>
//     </div>

// </>
//   )
// }
// export default Documents;

import Container from '../components/New/components/ui/container';
import Billboard from '../components/New/components/ui/billboard';
import ProductCard from '../components/New/components/ui/product-card';
import NoResults from '../components/New/components/ui/no-results';

import getProducts from '../actions/get-products';
import getCategory from '../actions/get-category';
import getSizes from '../actions/get-sizes';
import getColors from '../actions/get-colors';

import Filter from './New/components/filter';
import MobileFilters from './New/components/mobile-filters';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
// @ts-ignore
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(item => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
