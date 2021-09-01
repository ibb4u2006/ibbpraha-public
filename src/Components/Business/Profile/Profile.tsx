import React, { FC } from "react";
import classNames from "classnames";
import parse from "html-react-parser";
import SideIcons from "../../Common/SideIcons";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledContent, StyledProfile } from "./ProfileStyle";

interface IProps {
    profile: any;
    subCategories: any;
}

const Profile: FC<IProps> = ({profile, subCategories}) => {
    return (
        <>
            <SideIcons profile={profile} />
            <StyledProfile className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="business-avatar">
                            <Image
                                src={profile?.image ? profile?.image : '/asset/profile.png'}
                                width="360px"
                                height="360px"
                                alt={profile?.name}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <h2>{profile?.name}</h2>
                        <div className="profile-info">
                            <span>
                                {profile?.city}, {profile?.country}
                            </span>
                            {profile?.profiles && profile?.profiles?.map((pfile: any) => (
                                <span>{pfile?.profile}</span>
                            ))}
                        </div>
                        <div className="contacts">
                            <span>
                                T:{" "}
                                <Link to={`tel:${profile?.phone}`}>
                                    {profile?.phone}
                                </Link>
                            </span>{" "}
                            <br />
                            <span>
                                E:{" "}
                                <Link
                                    to={`mailto:${profile?.email}`}
                                >
                                    {profile?.email}
                                </Link>
                            </span>
                        </div>

                        <div className="category-btns">
                            {subCategories?.map((cat: any, i: any) => (
                                <React.Fragment key={cat?.key}>
                                    {cat?.key && (
                                        <button
                                            className={classNames("m-1", {
                                                "btn-danger": i === 0,
                                                "btn-info": i === 1,
                                                "btn-warning": i === 2,
                                                "btn-primary": i === 3,
                                                "btn-success": i === 4,
                                                pinkbg: i === 5,
                                                yellowbg: i === 6,
                                                bluebg: i === 7,
                                                pacificblue: i === 8,
                                                dodgerblue: i === 9,
                                            })}
                                            style={{ textTransform: 'capitalize' }}
                                        >
                                            {cat?.sub_category}
                                        </button>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </StyledProfile>
            <StyledContent>
                {profile?.extended_profile?.map((p: any) => (
                    <>
                        <div style={{ borderBottom: '1px solid #b3b3b4', margin: '1rem 0', padding: '1rem 0' }}>
                            <h3 style={{ textTransform: 'uppercase' }}>{p?.title}</h3>
                        </div>
                        <div>
                            <p>{parse(p?.info)}</p>
                        </div>
                    </>
                ))}
            </StyledContent>
        </>
    )
}

export default Profile;