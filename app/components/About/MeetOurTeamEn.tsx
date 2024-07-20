import Link from 'next/link';
import React from 'react';
import { Teams } from '../../types';
type Props = {
  teams: Teams[];
}
const MeetOurTeamEn: React.FC<Props> = ({ teams }) => {
  return (
    <>
      <section
        className="off-screen off-screen--hide off-screen--fade-up js-meet-the-team"
        id="meet-the-team">
        <div className="container card-grid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title title--lg red-1-color">Meet The Team</h2>
            </div>
          </div>
          <div className="row js-team-top-level">
            {teams.map((t => (
              <div className="col-xl-4 col-md-6 order-1" key={t.id}>
                <Link href={`/about/${t.id}`}>
                  <div className="card card--split red-1-background">
                    <div className="row no-gutters">
                      <div className="col-6">
                        <div className="card__content">
                          <div className="title title--sm">{t.name}</div>

                          <div className="card--split__hover title--medium-weight">
                            Meet The Team
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-6 card--split__image grayscale"
                        style={{
                          backgroundImage:
                            `url(${t.imageUrl})`,
                        }}></div>
                    </div>
                  </div>
                </Link>
              </div>
            )))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeamEn;
