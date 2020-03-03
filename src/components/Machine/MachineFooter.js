import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const MachineFooterBorder = styled.div`
    position: absolute;
    bottom: -17px;
    left: -14px;
    width: 1030px;
    border-radius: 1.5rem;
    margin: 0 auto;
    height: 100px;
    box-shadow: 0 3px 6px #151515;
    padding: 1rem 2rem;
    border-top: 3px solid #c9cfcf;
    background-color: #56595a;
    background-image: linear-gradient(
        140deg,
        #56595a 0%,
        #a3a8a8 18%,
        #56595a 49%,
        #a3a8a8 83%,
        #56595a 100%
    );
`
const MachineFooterContentBorder = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    padding: 0.8rem;
    background-color: #7b7f81;

    background-image: linear-gradient(
        180deg,
        #7b7f81 0%,
        #c1c7c7 18%,
        #7b7f81 49%,
        #c1c7c7 83%,
        #7b7f81 90%,
        #c1c7c7 100%
    );
`
const MachineFooterContainer = styled.ul`
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    background-color: #f4f4f4;
    display: flex;

    justify-content: space-between;
`
const MachineFooterItem = styled.li`
    padding: 0.5rem 1rem;
    list-style: none;

    border-left: 1px solid green;
    &:first-child {
        /* align-self: stretch; */
        padding: 0.8rem 1.5rem;
        display: flex;
        align-items: center;
        border-left: none;
    }
`
const MachineFooterItemTitle = styled.div`
    font-size: 1.55rem;
    letter-spacing: 0.8px;
    display: flex;
    flex-wrap: wrap;
    /* text-transform: uppercase; */
    font-weight: bold;
`

const FooterLink = styled.a`
    text-decoration: none;
    color: #0c6bf0;

    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const MachineFooterHashtag = styled.span`
    color: red;

    font-weight: 600;
    letter-spacing: 1px;
`

const BtnText = styled.h5`
    font-size: 2.4rem;
    color: #f1f1f1;
    /* text-shadow: 1px 2px #404040; */
    text-transform: uppercase;

    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    font-weight: 500;

    transition: all 0.2s;
`
const MachineFooterSpinBtn = styled.button`
    width: 20rem;
    height: 100%;
    border-radius: 1rem;
    outline: none;
    background: rgb(78, 164, 203);
    background: radial-gradient(
        circle,
        rgb(78, 164, 203) 15%,
        rgb(0, 122, 167) 100%
    );

    &:hover ${BtnText} {
        color: #fff;
        transform: scale(1.1);
    }

    &:hover {
        background: rgb(79, 180, 203);
        box-shadow: 0 0 8px 1px rgb(79, 180, 203);
        background: radial-gradient(
            circle,
            rgb(79, 180, 203) 15%,
            rgb(40, 180, 203) 100%
        );
    }
`

const MachineFooter = ({ spin }) => {
    const intl = useIntl()

    return (
        <MachineFooterBorder>
            <MachineFooterContentBorder>
                <MachineFooterContainer>
                    <MachineFooterItem>
                        <MachineFooterItemTitle isDe={intl.locale === "de"}>
                            <span>
                                {intl.formatMessage({
                                    id: "general.doneProjects",
                                })}

                                <FooterLink href="/">
                                    {" "}
                                    NeuroN Foundation{" "}
                                </FooterLink>
                                <MachineFooterHashtag>
                                    #WiemCoWspieram.
                                </MachineFooterHashtag>
                            </span>
                        </MachineFooterItemTitle>
                    </MachineFooterItem>

                    <MachineFooterItem btn>
                        <MachineFooterSpinBtn>
                            <BtnText>
                                {intl.formatMessage({
                                    id: "general.support",
                                })}
                            </BtnText>
                        </MachineFooterSpinBtn>
                    </MachineFooterItem>
                    <MachineFooterItem btn>
                        <MachineFooterSpinBtn onClick={() => spin()}>
                            <BtnText>
                                {intl.formatMessage({
                                    id: "general.spin",
                                })}
                            </BtnText>
                        </MachineFooterSpinBtn>
                    </MachineFooterItem>
                </MachineFooterContainer>
            </MachineFooterContentBorder>
        </MachineFooterBorder>
    )
}
MachineFooter.propTypes = {
    spin: PropTypes.func.isRequired,
}
export default MachineFooter
