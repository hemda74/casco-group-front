import Link from 'next/link';
import React from 'react';
import { Event3 } from '../../types';
type Props = {
    articles: Event3[]
};
const ArticlesEn: React.FC<Props> = ({ articles }) => {
    return (
        <>
            <div id="content-wrap">
                <div className="banner banner--ar banner--full-overlay ">
                    <div className="banner__background">
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/11/careers_banner-scaled.jpg" />
                    </div>
                    <div className="banner__center text-center ">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-11">
                                    <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                                        Articles
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container card-grid">
                    <div className="row pad-40-vert">
                        {articles.map((e) => (
                            <div className="col-md-4" key={e.id}>
                                <Link href={`/news-insights/articles/${e.id}`}>
                                    <div className="card  red-2-background  card--fixed-sm ">
                                        <div className="card__category">Article</div>
                                        <div className="position-bottom">
                                            <div className="card__content">
                                                <h3 className="title title--xs title--medium-weight ">
                                                    {e.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlesEn;
