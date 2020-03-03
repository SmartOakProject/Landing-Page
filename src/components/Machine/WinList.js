import React from "react"
import styled from "styled-components"

import icon2 from "../../images/gamble/icon-2.svg"
import icon3 from "../../images/gamble/icon-3.svg"
import icon4 from "../../images/gamble/icon-4.svg"
import icon5 from "../../images/gamble/icon-5.svg"
import icon6 from "../../images/gamble/icon-6.svg"
import icon7 from "../../images/gamble/icon-7.svg"
import icon8 from "../../images/gamble/icon-8.svg"
import icon9 from "../../images/gamble/icon-9.svg"

const WinValuesBorder = styled.div`
    width: 26%;
    height: 470px;
    background-color: #97999b;
    background-image: linear-gradient(
        180deg,
        #97999b 0%,
        #e4e7e7 30%,
        #97999b 49%,
        #e4e7e7 97%,
        #97999b 100%
    );
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    &::after {
        position: absolute;
        content: "";
        width: 1px;
        height: 100%;
        right: 83px;
        top: 0;
        background-color: #97999b;
        background-image: linear-gradient(
            180deg,
            #97999b 0%,
            #e4e7e7 30%,
            #97999b 49%,
            #e4e7e7 82%,
            #97999b 100%
        );
    }
`

const WinListContainer = styled.div`
    width: 93%;
    height: 96%;
    border-radius: 1rem;
    background-color: #fff;
`

const ListContainer = styled.ul`
    width: 100%;
    height: 100%;

    padding: 1rem;
`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12.5%;
`
const IconsContainer = styled.div`
    display: flex;
`
const Icon = styled.img`
    width: 2.9rem;
    margin: 1.25rem 0.8rem;
`
const ListValue = styled.div`
    margin-right: 1rem;
    font-size: 1.6rem;
`

const WinList = () => {
    return (
        <WinValuesBorder>
            <WinListContainer>
                <ListContainer>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon3} />
                            <Icon src={icon3} />
                            <Icon src={icon3} />
                        </IconsContainer>
                        <ListValue>200</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon8} />
                            <Icon src={icon8} />
                            <Icon src={icon8} />
                        </IconsContainer>
                        <ListValue>50</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon7} />
                            <Icon src={icon7} />
                            <Icon src={icon7} />
                        </IconsContainer>
                        <ListValue>20</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon5} />
                            <Icon src={icon5} />
                            <Icon src={icon5} />
                        </IconsContainer>
                        <ListValue>18</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon6} />
                            <Icon src={icon6} />
                            <Icon src={icon6} />
                        </IconsContainer>
                        <ListValue>15</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon2} />
                            <Icon src={icon2} />
                            <Icon src={icon2} />
                        </IconsContainer>
                        <ListValue>14</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon4} />
                            <Icon src={icon4} />
                            <Icon src={icon4} />
                        </IconsContainer>
                        <ListValue>12</ListValue>
                    </ListItem>
                    <ListItem>
                        <IconsContainer>
                            <Icon src={icon9} />
                            <Icon src={icon9} />
                            <Icon src={icon9} />
                        </IconsContainer>
                        <ListValue>6</ListValue>
                    </ListItem>
                </ListContainer>
            </WinListContainer>
        </WinValuesBorder>
    )
}
export default WinList
